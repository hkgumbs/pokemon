var ui = require('ui');
var ws_setup = require('./ws_setup');
var BattleScene = require('./battle_scene');

var main = new ui.Card({
  body: 'Waiting for server data...'
});
main.show();
//ws_setup();

var s = {name: 'PIKACHU', health: 10, image_back: 'images/25_back.png'};
var o = {name: 'PIKACHU', health: 15, image_front: 'images/25_front.png'};
var bs = new BattleScene(s, o);
bs.display();