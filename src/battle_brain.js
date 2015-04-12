console.log('BRAIN');

function BattleBrain(self, opponent){
  this.self = self;
  this.opponent = opponent;
  
  //console.log(this.self.hp_base - this.self.hp_taken);
  
  this.apply_damage = function(damage){
    this.self.hp_taken += damage.hp;
    this.self.attack_taken += damage.attack;
    this.self.defense_taken += damage.defense;
  };
  
  this.calculate_attack = function(move, callback) {
    //TODO: throws when PP is no bueno
    
    var hp_given = 0;
    var attack_given = 0;
    var defense_given = 0;
    //var hp_self = 0;
    //var attack_self = 0;
    //var defense_self = 0;
    
    var a = this.self.level;
    var b = this.self.attack_base + this.self.attack_ext - this.self.attack_taken;
    var c = move.power;
    var d = this.opponent.defense_base + this.opponent.defense_ext;
    //var x = STAB
    var x = 1;
    var y = 1;
    var z = Math.floor(Math.random() * 255) + 217;
  
    hp_given = Math.floor((((((((2*a/5 + 2)*b*c)/d)/50 + 2)*x)*y)*z)/255);

    //var damage = 12;
  
    move.pp -= 1;
    
    this.opponent.hp_taken += hp_given;
    this.opponent.attack_taken += attack_given;
    this.opponent.defense_taken += defense_given;
    
    //callback({attack: attack_given, defense: defense_given, hp: hp_given});
    return {attack: attack_given, defense: defense_given, hp: hp_given};
  }; 
}

module.exports = BattleBrain;
