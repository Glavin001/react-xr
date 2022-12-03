const http = require('http')

const server = http.createServer(function (request, response) {
  //   console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function (data) {
      body += data
      //   console.log('Partial body: ' + body)
    })
    request.on('end', function () {
      //   console.log('Body: ' + body)
      console.log('Body:')
      const json = JSON.parse(body)
      // console.log(body);
      console.log(JSON.stringify(json, null, 2))
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(
        JSON.stringify(
          {
            message: 'Hello World'
          },
          null,
          2
        )
      )
    })
  } else {
    console.log('GET')
    response.writeHead(404, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ message: 'not found' }))
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
