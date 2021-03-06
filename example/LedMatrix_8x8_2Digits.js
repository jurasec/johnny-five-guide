var five = require("johnny-five"),
    board, lc;

board = new five.Board();

board.on("ready", function() {
  console.log("ready ...");
  
  MATRIX_CHARS = {
    "00" : [0x0,0xee,0xaa,0xaa,0xaa,0xaa,0xee,0x0],
    "01" : [0x0,0xe4,0xac,0xa4,0xa4,0xa4,0xee,0x0],
    "02" : [0x0,0xe4,0xaa,0xa2,0xa4,0xa8,0xee,0x0],
    "03" : [0x0,0xee,0xa2,0xae,0xae,0xa2,0xee,0x0],
    "04" : [0x0,0xea,0xaa,0xaa,0xae,0xa2,0xe2,0x0],
    "05" : [0x0,0xee,0xa8,0xae,0xa2,0xa2,0xee,0x0],
    "06" : [0x0,0xee,0xa8,0xae,0xaa,0xaa,0xee,0x0],
    "07" : [0x0,0xee,0xa2,0xa2,0xa6,0xa2,0xe2,0x0],
    "08" : [0x0,0xee,0xaa,0xae,0xaa,0xaa,0xee,0x0],
    "09" : [0x0,0xee,0xaa,0xaa,0xae,0xa2,0xe2,0x0],
    "10" : [0x0,0x4e,0xca,0x4a,0x4a,0x4a,0xee,0x0],
    "11" : [0x0,0x44,0xcc,0x44,0x44,0x44,0xee,0x0],
    "12" : [0x0,0x44,0xca,0x42,0x44,0x48,0xee,0x0],
    "13" : [0x0,0x4e,0xc2,0x4e,0x4e,0x42,0xee,0x0],
    "14" : [0x0,0x4a,0xca,0x4a,0x4e,0x42,0xe2,0x0],
    "15" : [0x0,0x4e,0xc8,0x4e,0x42,0x42,0xee,0x0],
    "16" : [0x0,0x4e,0xc8,0x4e,0x4a,0x4a,0xee,0x0],
    "17" : [0x0,0x4e,0xc2,0x42,0x46,0x42,0xe2,0x0],
    "18" : [0x0,0x4e,0xca,0x4e,0x4a,0x4a,0xee,0x0],
    "19" : [0x0,0x4e,0xca,0x4a,0x4e,0x42,0xe2,0x0],
    "20" : [0x0,0x4e,0xaa,0x2a,0x4a,0x8a,0xee,0x0],
    "21" : [0x0,0x44,0xac,0x24,0x44,0x84,0xee,0x0],
    "22" : [0x0,0x44,0xaa,0x22,0x44,0x88,0xee,0x0],
    "23" : [0x0,0x4e,0xa2,0x2e,0x4e,0x82,0xee,0x0],
    "24" : [0x0,0x4a,0xaa,0x2a,0x4e,0x82,0xe2,0x0],
    "25" : [0x0,0x4e,0xa8,0x2e,0x42,0x82,0xee,0x0],
    "26" : [0x0,0x4e,0xa8,0x2e,0x4a,0x8a,0xee,0x0],
    "27" : [0x0,0x4e,0xa2,0x22,0x46,0x82,0xe2,0x0],
    "28" : [0x0,0x4e,0xaa,0x2e,0x4a,0x8a,0xee,0x0],
    "29" : [0x0,0x4e,0xaa,0x2a,0x4e,0x82,0xe2,0x0],
    "30" : [0x0,0xee,0x2a,0xea,0xea,0x2a,0xee,0x0],
    "31" : [0x0,0xe4,0x2c,0xe4,0xe4,0x24,0xee,0x0],
    "32" : [0x0,0xe4,0x2a,0xe2,0xe4,0x28,0xee,0x0],
    "33" : [0x0,0xee,0x22,0xee,0xee,0x22,0xee,0x0],
    "34" : [0x0,0xea,0x2a,0xea,0xee,0x22,0xe2,0x0],
    "35" : [0x0,0xee,0x28,0xee,0xe2,0x22,0xee,0x0],
    "36" : [0x0,0xee,0x28,0xee,0xea,0x2a,0xee,0x0],
    "37" : [0x0,0xee,0x22,0xe2,0xe6,0x22,0xe2,0x0],
    "38" : [0x0,0xee,0x2a,0xee,0xea,0x2a,0xee,0x0],
    "39" : [0x0,0xee,0x2a,0xea,0xee,0x22,0xe2,0x0],
    "40" : [0x0,0xae,0xaa,0xaa,0xea,0x2a,0x2e,0x0],
    "41" : [0x0,0xa4,0xac,0xa4,0xe4,0x24,0x2e,0x0],
    "42" : [0x0,0xa4,0xaa,0xa2,0xe4,0x28,0x2e,0x0],
    "43" : [0x0,0xae,0xa2,0xae,0xee,0x22,0x2e,0x0],
    "44" : [0x0,0xaa,0xaa,0xaa,0xee,0x22,0x22,0x0],
    "45" : [0x0,0xae,0xa8,0xae,0xe2,0x22,0x2e,0x0],
    "46" : [0x0,0xae,0xa8,0xae,0xea,0x2a,0x2e,0x0],
    "47" : [0x0,0xae,0xa2,0xa2,0xe6,0x22,0x22,0x0],
    "48" : [0x0,0xae,0xaa,0xae,0xea,0x2a,0x2e,0x0],
    "49" : [0x0,0xae,0xaa,0xaa,0xee,0x22,0x22,0x0],
    "50" : [0x0,0xee,0x8a,0xea,0x2a,0x2a,0xee,0x0],
    "51" : [0x0,0xe4,0x8c,0xe4,0x24,0x24,0xee,0x0],
    "52" : [0x0,0xe4,0x8a,0xe2,0x24,0x28,0xee,0x0],
    "53" : [0x0,0xee,0x82,0xee,0x2e,0x22,0xee,0x0],
    "54" : [0x0,0xea,0x8a,0xea,0x2e,0x22,0xe2,0x0],
    "55" : [0x0,0xee,0x88,0xee,0x22,0x22,0xee,0x0],
    "56" : [0x0,0xee,0x88,0xee,0x2a,0x2a,0xee,0x0],
    "57" : [0x0,0xee,0x82,0xe2,0x26,0x22,0xe2,0x0],
    "58" : [0x0,0xee,0x8a,0xee,0x2a,0x2a,0xee,0x0],
    "59" : [0x0,0xee,0x8a,0xea,0x2e,0x22,0xe2,0x0],
    ":" : [0x0,0x18,0x18,0x0,0x18,0x18,0x0,0x0]
  };  

  lc = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4
    },
    isMatrix: true
  });

  board.repl.inject({
    lc: lc
  });

  lc.on();

   /**
   * led or setLed Set the status of a single Led.
   *
   * @param {Number} addr Address of Led (Number of Matrix Led)
   * @param {String} digits Digits to draw
   *
   */

  lc.draw2Digits = function( addr, digits ){
    character = MATRIX_CHARS[ digits ];
    character.forEach( function( rowByte, idx ) {
      lc.row( addr, idx, rowByte );
    });
  }    

  String.prototype.paddingLeft = function ( paddingValue ) {
    return String( paddingValue + this ).slice( -paddingValue.length );
  };

  function sendDigits(){
    var reloj=new Date();
    var segundos=reloj.getSeconds().toString().paddingLeft( "00" );
    lc.draw2Digits( 0, segundos );
    setTimeout( function(){
      sendDigits()
    },1000);
  }

  lc.demo = function(){
    sendDigits();
  }

});