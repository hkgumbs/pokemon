/*function Physics(phys_dict) {
  // TODO: type/null check these sexy beasts
  this.types = phys_dict.types;
  this.level = phys_dict.level;
  this.hp_base = phys_dict.hp_base;
  this.hp_ext = 0;
  this.hp_taken = 0;
  this.attack_base = phys_dict.attack_base;
  this.attack_ext = 0;
  this.defense_base = phys_dict.defense_base;
  this.defense_ext = 0;
  this.speed_base = phys_dict.speed_base;
  this.speed_ext = 0;
  this.special_base = phys_dict.special_base;
  this.special_ext = 0;
  this.exp_base = phys_dict.exp_base;
  this.exp_ext = 0;
  this.normal = phys_dict.normal;
  this.weak = phys_dict.weak;
  this.immune = phys_dict.immune;
  this.resistant = phys_dict.resistant;
  this.level_rate = phys_dict.level_rate;
  return this;
}*/

function Pokemon(poke_dict) {
  // TODO: type/null check these sexy beasts
  this.get_hp = function() {
    return this.hp_base + this.hp_ext - this.hp_taken;
  };
  this.name = poke_dict.name;
  this.number = poke_dict.number;
  this.catch_rate = poke_dict.catch_rate;
  this.level_rate = poke_dict.level_rate;
  this.types = poke_dict.types;
  this.level = poke_dict.level;
  this.hp_base = poke_dict.hp_base;
  this.hp_ext = 0;
  this.hp_taken = 0;
  this.attack_base = poke_dict.attack_base;
  this.attack_ext = 0;
  this.attack_taken = 0;
  this.defense_base = poke_dict.defense_base;
  this.defense_ext = 0;
  this.defense_taken = 0;
  this.speed_base = poke_dict.speed_base;
  this.speed_ext = 0;
  this.speed_taken = 0;
  this.special_base = poke_dict.special_base;
  this.special_ext = 0;
  this.special_taken = 0;
  this.exp_base = poke_dict.exp_base;
  this.exp_ext = 0;
  this.normal = poke_dict.normal;
  this.weak = poke_dict.weak;
  this.immune = poke_dict.immune;
  this.resistant = poke_dict.resistant;
  this.level_rate = poke_dict.level_rate;
  this.move4 = poke_dict.move4;
  this.move2 = poke_dict.move2;
  this.move3 = poke_dict.move3;
  this.move1 = poke_dict.move1;
  
  /*this.get_hp = function(){
    return this.hp_base + this.hp_ext - this.hp_taken;
  };*/
  
  /*this.moves = {
    one:poke_dict.move1,
    two:poke_dict.move2,
    three:poke_dict.move3,
    four:poke_dict.move4
  }*/
  return this;
}

module.exports.Pokemon=Pokemon;