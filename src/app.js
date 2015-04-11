var ui = require('ui');
var i = require('./init');
//var ws_setup = require('./ws_setup');
//var battle_scene = require('./battle_scene');
var BattleBrain = require('./battle_brain');

console.log('MAIN');

localStorage.clear();
i.init();
var pokelist = localStorage.getItem("pokelist");
var pokemen = JSON.parse(pokelist);

var self = pokemen.p25;
var opponent = pokemen.p115;

var main = new ui.Card({
  body: 'POKEMON'
});
main.show();

var brain = new BattleBrain(self,opponent);
var hp = self.hp_base - self.hp_taken;
console.log("BEFORE - " + hp);
brain.calculate_damage({attack: 0, defense: 0, hp: 13});
hp = self.hp_base - self.hp_taken;
console.log("AFTER  - " + hp);