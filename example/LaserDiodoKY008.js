var five = require("johnny-five"),
    board = new five.Board(),
    laserDiode;

board.on("ready", function() {

  laserDiode = new five.Led({
    pin: 9
  });

  // Hacemos que este disponible el objeto "laserDiodo" dentro del REPL
  this.repl.inject({
      laser: laserDiode
  });

  console.log( 'LD ready!' );

  laser.on()

  // Dentro del REPL, puedes probar el PWM con: laser.pulse() 

});