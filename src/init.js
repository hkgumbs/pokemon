var p = require('./pokemon');
var dex = require('./pokedex');
var Belt = require('./pokebelt');

//var BASE_KEY = "POKEBELT_";


function init() {
  var belt = new Belt();
  
  for(var key in belt){console.log(key + ": " + belt[key]);}
  
  console.log('INIT');
  //var pokemen = localStorage.getItem(BASE_KEY);
  
  if(belt.is_empty()){
    console.log('POPULATE BELT');
    //localStorage.setItem(BASE_KEY, JSON.stringify({p25:dex.poke25, p115:dex.poke115}));
    belt.add(dex.poke25);
    belt.add(dex.poke115);
    belt.add(dex.poke1);
    belt.add(dex.poke131);
  }
}

module.exports.init = init;