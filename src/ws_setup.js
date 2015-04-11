
var ui = require('ui');
var Pokebelt = require('./pokebelt');
var BattleScene = require('./battle_scene');

function Client() {
  self = this;
  self.ws = new WebSocket('ws://pokemon-pebble.herokuapp.com');

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.ws.send(JSON.stringify(data));
  };

  self.ws.onconnect = function() {
    self.pokemon = Pokebelt.get(0);
  };

  self.ws.onmessage = function() {
    switch(event.data.phase) {
      case 'handshake':
        self.first = JSON.parse(event.data.turn);
        var packet = {
          phase : 'init',
          pokemon : self.pokemon;
        };
        self.ws.send(JSON.stringify(packet));
        break;

      case 'init':
        var opponent = JSON.parse(event.data.pokemon);
        var callback = self.first ? self.respond : null;
        self.bs = new BattleScene(self.pokemon, self.opponent, callback);
        break;

      case 'ongoing':
        self.bs.attack_screen(event.data, self.respond);
        break;
      };
  };

  // TODO implement some close or retry feature
  // self.ws.onclose = function() {
  //   self.bs.hide();
  // };
};

module.exports = Client;
