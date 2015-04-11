var ui = require('ui');
var Client = require('./ws_setup');
var battle_scene = require('./battle_scene');
var battle_brain = require('./battle_brain');

var main = new ui.Card({
  body: 'Waiting for server data...'
});
main.show();
new Client();

//ws_setup();
//battle_scene();
battle_brain();
