var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (req, res) {
  var read_stream = fs.createReadStream(file);
  read_stream.on('data', writeCallback);
  read_stream.on('close', closeCallback);

  function writeCallback(data){
    res.write(data);
  }

  function closeCallback(){
    res.end();
  }
})

server.listen(port)

// var http = require('http')
// var fs = require('fs')

// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))

