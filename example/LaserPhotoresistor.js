var five = require("johnny-five"),
    board = new five.Board(),
    laserDiode;

board.on("ready", function() {

  laserDiode = new five.Led({
    pin: 9
  });

  // Hacemos que este disponible el objeto "laserDiode" dentro del REPL
  this.repl.inject({
      laser: laserDiode
  });

  // Creamos una instancia de Sensor, indicándole que lea con una frecuencia de 100 milisegundos.
  photoresistor = new five.Sensor({
    pin: "A2",
    freq: 100
  }); 
  laserDiode.on()

  photoresistor.on("data", function() {
    console.log(this.value);
    if( this.value > 100){
      console.log('_________uu$$$$$$$$$$$$$$$$$uu__________');
      console.log('_________u$$$$$$$$$$$$$$$$$$$$$u_________');
      console.log('________u$$$$$$$$$$$$$$$$$$$$$$$u________');
      console.log('_______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______');
      console.log('_______u$$$$$$$$$$$$$$$$$$$$$$$$$u_______');
      console.log('_______u$$$$$$”___”$$$”___”$$$$$$u________');
      console.log('_______”$$$$”______u$u_______$$$$”________');
      console.log('________$$$———u$u_______u$$$________');
      console.log('________$$$u______u$$$u______u$$$________');
      console.log('_________”$$$$uu$$$___$$$uu$$$$”_________');
      console.log('__________”$$$$$$$”___”$$$$$$$”__________');
      console.log('____________u$$$$$$$u$$$$$$$u____________');
      console.log('_____________u$”$”$”$”$”$”$u______________');
      console.log('__uuu________$$u$_$_$_$_$u$$_______uuu__');
      console.log('_u$$$$________$$$$$u$u$u$$$_______u$$$$_');
      console.log('__$$$$$uu______”$$$$$$$$$”_____uu$$$$$$__');
      console.log('u$$$$$$$$$$$uu____”””””____uuuu$$$$$$$$$$');
      console.log('$$$$”””$$$$$$$$$$uuu___uu$$$$$$$$$”””$$$”');
      console.log('_”””______””$$$$$$$$$$$uu_””$”””___________');
      console.log('___________uuuu_””$$$$$$$$$$uuu___________');
      console.log('__u$$$uuu$$$$$$$$$uu_””$$$$$$$$$$$uuu$$$__');
      console.log('__$$$$$$$$$$””””___________””$$$$$$$$$$$”__');
      console.log('___”$$$$$”______________________””$$$$””__');
    }    
  });

  console.log( 'LD ready!' );

});