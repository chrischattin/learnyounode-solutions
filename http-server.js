var http = require('http')
var request = process.argv[2]

http.get(request, function callback(response) {
  response.on('data', function(data) {
    console.log(data)
  }).setEncoding('utf8')
})


// Official:
// var http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// })
