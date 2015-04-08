var http = require('http')
var concatStream = require('concat-stream')
var request = process.argv[2]

http.get(request, function (response) {
  response.setEncoding('utf8')
  // response.on('data', function(data) {
  //   console.log(data.length)
  // });

  response.pipe(concatStream(function (data) { 
    console.log(data.length)
    console.log(data)
  }))

})


// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })
