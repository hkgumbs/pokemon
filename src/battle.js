function attack(attack, defender) {
  var attacker = attack.pokemon;
  var move = attack.move;
  
  /*var a = attacker.level;
  var b = attacker.attack_base + attacker.attack_ext;
  var c = move.power;
  var d = defender.defense_base + defender.defense_ext;
  //var x = STAB
  var x = 1;
  var y = 1;
  var z = Math.floor(Math.random() * 255) + 217;
  
  var damage = ((((((((2*a/5 + 2)*b*c)/d)/50 + 2)*x)*y)/10)*z)/255;*/
  var damage = 12;
  
  defender.hp_taken += damage;
}

module.exports.attack = attack;