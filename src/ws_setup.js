var Pokebelt = require('./pokebelt');
var BattleScene = require('./battle_scene');

function Client() {
  var self = this;
<<<<<<< HEAD
  self.ws = new WebSocket('ws://pokemon-pebble.herokuapp.com');
=======
  self.socket = new WebSocket('ws://pokemon-pebble.herokuapp.com');
  self.pokemon = Pokebelt.get(0);
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.socket.send(JSON.stringify(data));
  };

<<<<<<< HEAD
  self.ws.onmessage = function(event) {
    switch(event.data.phase) {
=======
  self.socket.onmessage = function(data) {
    console.log(data);
    var info = JSON.stringify(data);
    switch(info.phase) {
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1
      case 'handshake':
        self.first = info.turn;
        self.id = info.id;
        var packet = {
          phase : 'init',
          pokemon : self.pokemon,
        };
        self.socket.send(JSON.stringify(packet));
        break;

      case 'init':
        var opponent = info.pokemon;
        var callback = self.first ? self.respond : null;
        self.bs = new BattleScene(self.pokemon, opponent, callback);
        break;

      case 'ongoing':
        self.bs.attack_screen(info, self.respond);
        break;
      }
<<<<<<< HEAD
  };
=======
  });
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1

  // TODO implement some close or retry feature
  // self.ws.onclose = function() {
  //   self.bs.hide();
  // };
}

module.exports = Client;
