var five = require("johnny-five"),
    board = new five.Board(),
    myLed;

board.on("ready", function() {

  myLed = new five.Led({
    pin: 13 
  });

  myLed.strobe();

  // Hacemos que este disponible el objeto "myLed" dentro del REPL
  this.repl.inject({
      led: myLed
  });
  console.log( 'ready!' );

});