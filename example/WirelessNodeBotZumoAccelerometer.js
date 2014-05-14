var express = require('express.io'),
    routes = require('./routes'),
    user = require('./routes/user'),
    path = require('path'),
    five = require("johnny-five"),
    board;

var app = express().http().io();

app.io.on('connection', function (socket){
  console.log(socket.id);
  console.log('Ctrl remoto conectado...');
});

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
board = new five.Board({
  port: "/dev/tty.itead-DevB"
});

board.on("ready", function() {
  var speed = 100;  
  motor1 = new five.Motor([10, 8]);
  motor2 = new five.Motor([9, 7]);

  board.repl.inject({
  	lmotor: motor1,
  	rmotor: motor2,
  });

  app.io.route('up', function(req) {
      console.log(req.data);            
      motor1.rev( speed * req.data.speed );
      motor2.rev( speed * req.data.speed );
      console.log(' => Up: ' + speed * req.data.speed );
  });

  app.io.route('down', function(req) {      
      motor1.fwd( speed * req.data.speed * -1);
      motor2.fwd( speed * req.data.speed * -1);
      console.log(' => Down: ' + speed * req.data.speed );
  });

  app.io.route('left', function(req) {
      console.log(' => Left: ');
      motor1.fwd( 80 );
      motor2.rev( 80 );
  });

  app.io.route('right', function(req) {
      console.log(' => Right');
      motor1.rev( 80 );
      motor2.fwd( 80 );
  });

  app.io.route('stop', function(req) {
      console.log(' => Stoping...');
      motor1.stop();
      motor2.stop();
  });

  app.listen(7070, function(){
    console.log('Express server listening');
  });

  console.log("Ready event. Repl instance auto-initialized");
});
