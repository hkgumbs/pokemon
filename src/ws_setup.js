var Pokebelt = require('./pokebelt');
var BattleController = require('./battle_controller');

function Client() {
  var self = this;
  self.socket = new WebSocket('ws://pokemon-pebble.herokuapp.com');
  self.pokemon = Pokebelt.get(0);

  self.respond = function(data) {
    data.phase = 'ongoing';
    self.socket.send(JSON.stringify(data));
  };

  self.socket.onmessage = function(data) {
    console.log(data);
    var info = JSON.stringify(data);
    switch(info.phase) {
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
        //self.bs = new BattleScene(self.pokemon, opponent, callback);
        self.bc = new BattleController(self.pokemon, opponent);
        self.bc.waiting_room({hp:0, attack:0, defense:0},callback);
        break;

      case 'ongoing':
        //self.bs.attack_screen(info, self.respond);
        self.bc.waiting_room(info,self.respond);
        break;
      }
  };


  // TODO implement some close or retry feature
  // self.ws.onclose = function() {
  //   self.bs.hide();
  // };
}

module.exports = Client;
