let { handler } = require('./handler.js')
let fs = require('fs')
let path = require('path')
let mime = require('mime/lite')

module.exports = async (req, res) => {
  if (req.path.startsWith('/assets/')) {
    let file = path.join(__dirname, 'public', 'assets', req.path.substr(8))
    if (fs.existsSync(file)) {
      res.setHeader('Content-Type', mime.getType(file))
      return fs.readFileSync(file, 'utf-8')
    } else {
      res.statusCode = 404
      res.end('File not found')
    }
  } else {
    let body = await getBody(req)
    handler(
      {
        php: 'php-cgi',
        path: req.path,
        headers: req.headers,
        httpMethod: req.method,
        queryStringParameters: req.query,
        body
      },
      {
        succeed: ({ statusCode, multiValueHeaders: headers, body }) => {
          res.statusCode = statusCode
          Object.keys(headers).forEach(header => {
            res.setHeader(header, headers[header])
          })
          res.end(body)
        }
      }
    )
  }
}

function getBody(req) {
  return new Promise((resolve, reject) => {
    let out = ''
    req.on('error', reject)
    req
      .on('data', x => {
        out += x
      })
      .on('end', () => {
        resolve(out)
      })
  })
}
