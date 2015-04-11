var ui = require('ui');


var Client = require('./ws_setup');
var BattleScene = require('./battle_scene');

var main = new ui.Card({
  body: 'Waiting for server data...'
});
main.show();
new Client();

//ws_setup();

//var s = {name: 'PIKACHU', health: 10, image_back: 'images/25_back.png'};
//var bs = new BattleScene(s, o);
//bs.attack_screen();
