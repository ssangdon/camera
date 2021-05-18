const express = require('express');
const http = require('http');
let app = express()
let server = http.createServer(app);

app.use(express.static(__dirname + '/images'));

var img_flag = 0;
var cameraOptions = {
    width: 600,
    height: 420,
    mode: 'timelapse',
    awb: 'off',
    encoding: 'jpg',
    output: 'images/camera.jpg',
    q: 50,
    timeout: 10000,
    timelapse: 0,
    nopreview: true,
    th: '0:0:0'
};
var camera = new require('raspicam')(cameraOptions);

server.listen(8000, function() {
    camera.start();
  });



