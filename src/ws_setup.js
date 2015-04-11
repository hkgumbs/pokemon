var ui = require('ui');

var init = function() {
  var ws = new WebSocket('ws://pokemon-pebble.herokuapp.com');
  ws.onmessage = function (event) {

      // temp
      var card = new ui.Card({
          body: event.data
      });
      card.show();

      if (event.data == "Begin") {
          // TODO start battle screen
          // TODO it is this users turn
      } else if (event.data == "Ready") {
          // TODO start battle screen
          // TODO user is waiting for attack
      } else {
          // TODO user is receiving an attack
      }
  };
};

module.exports = init;
