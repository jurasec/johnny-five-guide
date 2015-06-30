var five = require("johnny-five"),
    board, sensor;

board = new five.Board();

board.on("ready", function() {

  // Create a new `sensor` hardware instance.
  sensor = new five.Sensor({
    pin: "A0",
    freq: 250
  });

  board.repl.inject({
    sensor: sensor
  });

  
  var barra = "◼";
  sensor.scale([0,100]).on("data", function() {
    // console.log(this.value, this.raw);
    barra = "◼";
    for(i=0;i<=this.value;i++)
       barra = barra + "◼";
    console.log(barra);
  });

  // "change"
    // Aliases: "bend", "force", "slide", "touch"
});





 