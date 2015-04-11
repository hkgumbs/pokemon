var ui = require('ui');
var ws_setup = require('./ws_setup');
var battle_scene = require('./battle_scene');

var main = new ui.Card({
  body: 'Waiting for server data...'
});
main.show();
//ws_setup();
battle_scene();