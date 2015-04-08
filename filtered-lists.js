var fs = require('fs');
var path = require('path');
var dirpath = process.argv[2];
var extension = process.argv[3];

fs.readdir(dirpath, callback);

function callback(err, list) {
  for (var i = 0; i < list.length; i++) {
    if (extension === path.extname(list[i]).replace('.', '')) {
      console.log(list[i]);
    };
  };
}

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })