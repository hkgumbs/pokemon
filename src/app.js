var ui = require('ui');


var Client = require('./ws_setup');
var BattleScene = require('./battle_scene');

var main = new ui.Card({
  body: 'Waiting for a nearby opponent...'
});
main.show();
new Client();
