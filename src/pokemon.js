function Pokemon(poke_dict) {
  // TODO: type/null check these sexy beasts
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
<<<<<<< HEAD
  this.moves=poke_dict.moves;
  this.image_front = poke_dict.image_front;
  this.image_back = poke_dict.image_back;
  this.get_hp = function(){
=======
  this.moves = [];
  this.moves[0] = poke_dict.move1;
  this.moves[1] = poke_dict.move2;
  this.moves[2] = poke_dict.move3;
  this.moves[3] = poke_dict.move4;

  
  /*this.get_hp = function(){
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1
    return this.hp_base + this.hp_ext - this.hp_taken;
  };
}

module.exports.Pokemon=Pokemon;