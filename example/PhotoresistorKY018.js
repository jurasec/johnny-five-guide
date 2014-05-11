var five = require("johnny-five"),
    board, photoresistor;

board = new five.Board();

board.on("ready", function() {

  // Creamos una instancia de Sensor, indicándole que lea con una frecuencia de 100 milisegundos.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 100
  }); 

  photoresistor.on("data", function() {
    console.log(this.value);
  });
    
});