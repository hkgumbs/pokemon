var p = require('./pokemon');
var dex = require('./pokedex');

function init() {
  var pokemen = localStorage.getItem("pokelist");
  if(pokemen === null || pokemen.length === 0){
    localStorage.setItem("pokelist", JSON.stringify({p25:dex.poke25, p115:dex.poke115}));
  }
}

module.exports.init = init;