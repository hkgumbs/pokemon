//var ui = require('ui');
var i = require('./init');
var Belt = require('./pokebelt');
//var BattleScene = require('./battle_scene');
//var ws_setup = require('./ws_setup');
//var battle_scene = require('./battle_scene');
//var BattleBrain = require('./battle_brain');
var BattleController = require('./battle_controller');

console.log('MAIN');

localStorage.clear();
i.init();

//var pokelist = localStorage.getItem("pokelist");
//var pokemen = JSON.parse(pokelist);

var belt = new Belt();
var self = belt.get(0);
var opponent = belt.get(1);

var bc = new BattleController(self, opponent);
bc.waiting_room({hp:12, attack:0, defense: 0}, 8);

/*var ui = require('ui');
var i = require('./init');
var Client = require('./ws_setup');
var BattleScene = require('./battle_scene');

localStorage.clear();
i.init();

var main = new ui.Card({
  body: 'Waiting for a nearby opponent...'
});
main.show();
new Client();

//ws_setup();

//var s = {name: 'PIKACHU', health: 10, image_back: 'images/25_back.png'};
//var o = {name: 'PIKACHU', health: 10, image_front: 'images/25_front.png'};
//var bs = new BattleScene(s, o);
//bs.attack_screen();*/
