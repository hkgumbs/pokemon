var Belt = require('./pokebelt');
var BattleController = require('./battle_controller');

function Client() {
  var self = this;
  self.socket = new WebSocket('ws://54.69.195.202');
  self.pokemon = new Belt().get(0);

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.socket.send(JSON.stringify(data));
  };

  self.socket.onmessage = function(event) {

    console.log(event.data);
    var info = JSON.parse(event.data);

    if(info.phase == 'handshake') {
      console.log('handshake');
      self.first = info.first;
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
      self.bc = new BattleController(self.pokemon, opponent);
      self.bc.waiting_room({hp:0, attack:0, defense:0},callback);
    }

    else if(info.phase == 'ongoing') {
      console.log('ongoing');
      self.bc.waiting_room(info,self.respond);
    }

    else {
      console.log('default');
    }
  };
}

module.exports = Client;
