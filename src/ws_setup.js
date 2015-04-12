var Pokebelt = require('./pokebelt');
var BattleScene = require('./battle_scene');

function Client() {
  var self = this;
  self.socket = new WebSocket('ws://pokemon-pebble.herokuapp.com');
  self.pokemon = Pokebelt.get(0);

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.socket.send(JSON.stringify(data));
  };

  self.socket.onmessage = function(event) {

    console.log(event.data);
    var info = JSON.parse(event.data);

    if(info.phase == 'handshake') {
      console.log('handshake');
      self.first = info.turn;
      self.id = info.id;
      var packet = {
        phase : 'init',
        pokemon : self.pokemon,
      };
      self.socket.send(JSON.stringify(packet));
    }

    else if(info.phase == 'init') {
      console.log('init');
      var opponent = info.pokemon;
      var callback = self.first ? self.respond : null;
      self.bs = new BattleScene(self.pokemon, opponent, callback);
    }

    else if(info.phase == 'ongoing') {
        console.log('ongoing');
        self.bs.attack_screen(info, self.respond);
    }

    else {
      console.log('default');
    }
  };
}

module.exports = Client;
