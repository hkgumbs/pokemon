var BattleBrain = require('./battle_brain');

function BattleStuff(s, o) {
  var self = s;
  var opponent = 0;
  
  var brain = new BattleBrain(self,opponent);
  
  this.attack = function(move_no) {
    var move = self.moves[move_no];
    move.pp--;
    var dam = brain.calculate_attack(move,null);
    return dam;
    /*if(opponent)*/
  };
}

module.exports = BattleStuff;