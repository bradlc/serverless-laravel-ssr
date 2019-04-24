function parseRequest(requestString) {
  const request = {}
  const lines = requestString.split(/\r?\n/)

  const parsedRequestLine = parseRequestLine(lines.shift())
  request['method'] = parsedRequestLine['method']
  request['uri'] = parsedRequestLine['uri']

  //TODO refactor this part to be tested
  const headerLines = []
  while (lines.length > 0) {
    const line = lines.shift()
    if (line === '') {
      break
    }
    headerLines.push(line)
  }

  request['headers'] = parseHeaders(headerLines)
  request['body'] = lines.join('\r\n')

  return request
}

function parseResponse(responseString) {
  const response = {}
  const lines = responseString.split(/\r?\n/)

  const parsedStatusLine = parseStatusLine(lines.shift())
  response['protocolVersion'] = parsedStatusLine['protocol']
  response['statusCode'] = parsedStatusLine['statusCode']
  response['statusMessage'] = parsedStatusLine['statusMessage']

  //TODO refactor this part to be tested
  const headerLines = []
  while (lines.length > 0) {
    const line = lines.shift()
    if (line === '') {
      break
    }
    headerLines.push(line)
  }

  response['headers'] = parseHeaders(headerLines)
  response['body'] = lines.join('\r\n')

  return response
}

function parseHeaders(headerLines) {
  const headers = {}
  for (let line of headerLines) {
    const parts = line.split(':')
    const key = parts.shift().toLowerCase()
    const value = parts.join(':').trim()
    if (headers[key]) {
      headers[key].push(value)
    } else {
      headers[key] = [value]
    }
  }

  return headers
}

function parseStatusLine(statusLine) {
  const parts = statusLine.match(/^(.+) ([0-9]{3}) (.*)$/)
  const parsed = {}

  if (parts !== null) {
    parsed['protocol'] = parts[1]
    parsed['statusCode'] = parts[2]
    parsed['statusMessage'] = parts[3]
  }

  return parsed
}

var parseRequestLine = function(requestLineString) {
  const parts = requestLineString.split(' ')
  const parsed = {}

  parsed['method'] = parts[0]
  parsed['uri'] = parts[1]
  parsed['protocol'] = parts[2]

  return parsed
}

module.exports.parseRequest = parseRequest
module.exports.parseResponse = parseResponse
module.exports.parseRequestLine = parseRequestLine
module.exports.parseStatusLine = parseStatusLine
module.exports.parseHeaders = parseHeaders
