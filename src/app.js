var i = require('./init');
var ui = require('ui');
var Client = require('./ws_setup');

console.log('MAIN');
var main = new ui.Card({
  body: 'Waiting for a nearby opponent...'
});
main.show();

localStorage.clear();
i.init();
new Client();
