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
  this.moves=poke_dict.moves;
  this.image_front = poke_dict.image_front;
  this.image_back = poke_dict.image_back;
  this.get_hp = function(){
    return this.hp_base + this.hp_ext - this.hp_taken;
  };
}

module.exports.Pokemon=Pokemon;