var Belt = require('./pokebelt');
var BattleBrain = require('./battle_brain');
var BattleScene = require('./battle_scene');

function BattleController(s,o,c) {
  var belt = new Belt();
  var self = belt.get(0);
  var opponent = belt.get(1);
  
  //var brain = new BattleBrain(self,opponent);
  
  //for(var key in self){console.log(key + ": " + self[key]);}
  
  /*var hp = self.hp_base - self.hp_taken;
  console.log("SELF BEFORE apply_damage - " + hp);
  brain.apply_damage({attack: 0, defense: 0, hp: 13});
  hp = self.hp_base - self.hp_taken;
  console.log("SELF AFTER apply_damage - " + hp);*/
  
  /*hp = opponent.hp_base - opponent.hp_taken;
  console.log("OPPONENT BEFORE calculate_attack - " + hp);
  var dam = brain.calculate_attack(self.moves[0],null);
  hp = opponent.hp_base - opponent.hp_taken;
  console.log("OPPONENT AFTER calculate_attack - " + hp);*/
  
  //for(var key in dam){console.log(key + ": " + dam[key]);}
  
  var bs = new BattleScene(self, opponent);
  var test = bs.attack_screen({attack: 0, defense: 0, hp: 13}, 5);
  
  /*this.defend = function(damage, cb) {
    

  }*/
  //console.log("BATTLE SCENE RETURNS: " + test);
}

module.exports = BattleController;