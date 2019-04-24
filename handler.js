'use strict'

let child_process = require('child_process')
let parser = require('./http-string-parser.js')
let fs = require('fs')
let path = require('path')
let mime = require('mime/lite')
let renderApp = require('./public/assets/server/app.js')

module.exports.handler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false

  if (event.artisan) {
    let p = child_process.spawnSync(
      './php-cgi-7.2.1',
      [
        '-f',
        path.resolve(__dirname + '/artisan'),
        ...event.artisan
          .split(/\s+/)
          .map(x => x.replace(/^'/, '').replace(/'$/, '')),
        '--ansi'
      ],
      {
        env: {
          AWS_LAMBDA: true
        }
      }
    )
    return callback(null, p.stdout.toString('utf-8'))
  }

  if (event.path.startsWith('/assets/')) {
    let file = path.join(__dirname, 'public', 'assets', event.path.substr(8))
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf-8')
      return context.succeed({
        statusCode: 200,
        headers: { 'Content-Type': mime.getType(file) },
        body: content
      })
    }
  }

  let requestMethod = event.httpMethod || 'GET'
  let requestBody = event.body || ''
  let serverName = event.headers ? event.headers.Host : 'lambda.dev'
  let requestUri = event.path || ''
  let reqHeaders = {}
  let queryParams = ''

  if (event.headers) {
    Object.keys(event.headers).map(key => {
      reqHeaders['HTTP_' + key.toUpperCase().replace(/-/g, '_')] =
        event.headers[key]
      reqHeaders[key.toUpperCase().replace(/-/g, '_')] = event.headers[key]
    })
  }

  if (event.queryStringParameters) {
    let parameters = Object.keys(event.queryStringParameters).map(key => {
      return key + '=' + event.queryStringParameters[key]
    })
    queryParams = parameters.join('&')
  }

  let scriptPath = path.resolve(__dirname + '/public/index.php')

  let proc = child_process.spawnSync(
    event.php || './php-cgi-7.2.1',
    ['-f', scriptPath],
    {
      env: {
        REDIRECT_STATUS: 200,
        REQUEST_METHOD: requestMethod,
        SCRIPT_FILENAME: scriptPath,
        SCRIPT_NAME: '/index.php',
        PATH_INFO: '/',
        SERVER_NAME: serverName,
        SERVER_PROTOCOL: 'HTTP/1.1',
        REQUEST_URI: requestUri,
        QUERY_STRING: queryParams,
        AWS_LAMBDA: true,
        CONTENT_LENGTH: Buffer.byteLength(requestBody, 'utf-8'),
        HTTPS: true,
        ...reqHeaders,
        ...process.env
      },
      input: requestBody
    }
  )

  console.log(proc.stderr.toString('utf-8'))

  let { body, headers, statusCode = 200 } = parser.parseResponse(
    proc.stdout.toString('utf-8')
  )

  if (
    headers['content-type'][0] === 'application/json' &&
    (!event.queryStringParameters ||
      typeof event.queryStringParameters.__json === 'undefined')
  ) {
    let parsedBody = JSON.parse(body)
    if (parsedBody.component) {
      body = renderApp(parsedBody)
      headers['content-type'][0] = 'text/html'
    }
  }

  context.succeed({
    statusCode,
    multiValueHeaders: headers,
    body
  })
}
