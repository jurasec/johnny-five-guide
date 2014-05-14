var keypress = require('keypress');
var five = require("johnny-five"),
    board;

// Johnny-Five will try its hardest to detect the port for you,
// however you may also explicitly specify the port by passing
// it as an optional property to the Board constructor:
board = new five.Board({
  // port: "/dev/tty.itead-DevB"
  port: "/dev/cu.itead-DevB"
});

// board = new five.Board();
board.on("ready", function() {
  var speed = 80;

  console.log("Repl instance auto-initialized ready!!!");
  
  motor1 = new five.Motor([10, 8]);
  motor2 = new five.Motor([9, 7]);

  // motor1 = new five.Motor({
  //   pins:{
  //     pwm: 10,
  //     dir: 8
  //   }
  // });

  // motor2 = new five.Motor({
  //   pins:{
  //     pwm: 9,
  //     dir: 7 
  //   }
  // });

  board.repl.inject({
  	lmotor: motor1,
  	rmotor: motor2,
  });

  // make `process.stdin` begin emitting "keypress" events
  keypress(process.stdin);

  // listen for the "keypress" event
  process.stdin.on('keypress', function (ch, key) {
    if (key && key.ctrl && key.name == 'c') {
      process.exit(0);
    }

    if ( key ){
      switch ( key.name ){
        case 'up':
          speed+=20;
          console.log(' => Up: ' + speed);
          motor1.rev( speed );
          motor2.rev( speed );
          break;
        case 'down':          
          speed+=20;
          console.log(' => Down: ' + speed);
          motor1.fwd( speed );
          motor2.fwd( speed );
          break;
        case 'left':
          console.log(' => Left: ');
          motor1.fwd( speed * 0.5 );
          motor2.rev( speed * 0.5 );
          break;
        case 'right':
          console.log('right');
          motor1.rev( speed * 0.5 );
          motor2.fwd( speed * 0.5 );
          break;
        case 's':
          console.log(' => Stoping...');
          motor1.stop();
          motor2.stop();
          break;
        case 'r':
          console.log(' => Speed to 80');
          speed = 80;
          break;  
        default:
          console.log('Ignoring key: ' + key.name);
      }
    }

  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
 
});




