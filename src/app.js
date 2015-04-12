var i = require('./init');
var ui = require('ui');
var Client = require('./ws_setup');
var Belt = require('./pokebelt');

console.log('MAIN');

/*var belt = new Belt();
var items = [];
for(var i = 0; i < belt.size; i++){
  items.push(belt.get(i));
}

var pokelist = new ui.Menu({sections: [{items : items}]});*/


var main = new ui.Card({
  body: 'Waiting for a nearby opponent...'
});
main.show();

localStorage.clear();
i.init();
new Client();
