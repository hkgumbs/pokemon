var Pokebelt = require('./pokebelt');
var BattleScene = require('./battle_scene');
var IO = require('./socket.io');

function Client() {
  var self = this;
  self.socket = IO('ws://43272bb7.ngrok.com');
  self.pokemon = Pokebelt.get(0);

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.socket.emit(self.id, data);
  };

  self.socket.on('message', function(data) {
    console.log(data);
    switch(data.phase) {
      case 'handshake':
        self.first = data.turn;
        self.id = data.id;
        var packet = {
          phase : 'init',
          pokemon : self.pokemon,
        };
        self.socket.emit(self.id, packet);
        break;

      case 'init':
        var opponent = data.pokemon;
        var callback = self.first ? self.respond : null;
        self.bs = new BattleScene(self.pokemon, opponent, callback);
        break;

      case 'ongoing':
        self.bs.attack_screen(data, self.respond);
        break;
      }
  });

  // TODO implement some close or retry feature
  // self.ws.onclose = function() {
  //   self.bs.hide();
  // };
}

module.exports = Client;
