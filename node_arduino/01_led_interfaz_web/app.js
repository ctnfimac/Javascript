/**
 * 
 *  abrir lammp en linux 
 *  cd /opt/lampp
 *  sudo ./manager-linux.run (or manager-linux-x64.run)
 *  referencias:
 *  https://www.apachefriends.org/es/faq_linux.html
 *  https://cdnjs.com/libraries/socket.io
 *  http://johnny-five.io/examples/led-blink/
 *  https://socket.io/docs/v3/index.html
 *  https://stackoverflow.com/questions/43558542/give-user-permissions-to-htdocs-in-ubuntu
 */

var express = require('express'); 
var app = express();
var io = require('socket.io')(app.listen(8081));
var {Led, Board} = require('johnny-five');


app.get('/', function (req,res) { 
    res.sendFile(__dirname + '/index.html');
});


app.get('/js/index.js', function (req,res) { 
  res.sendFile(__dirname + '/js/index.js');
});


var board = new Board({
  repl:false,
});

board.on("ready", function() {
  console.info('Placa iniciada')
  const led = new Led(13)
  io.on('connection', function (socket) {
      socket.on('enciende', data =>  led.on())
      socket.on('apaga', data =>  led.off())
  });

});



