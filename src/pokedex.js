var p = require('./pokemon');
var m = require('./movedex')

module.exports.poke25 = new p.Pokemon({
  name: "Pikachu", 
  number: 25,
  types: [1],
  level: 5,
  catch_rate: 190,
  hp_base: 35,
  attack_base: 55,
  defense_base: 30,
  speed_base: 90,
  special_base: 50,
  exp_base: 0,
  normal:[], 
  weak:[], 
  immune:[], 
  resistant:[],
  level_rate:0,
  back_img:"25_back.png",
  front_img:"25_front.png",
  move1:m.move1,
  move2:m.move5,
  move3:m.move10,
  move4:m.move35
});

module.exports.poke1 = new p.Pokemon({
  name: "Bulbasaur", 
  number: 1,
  types: [1],
  level: 5,
  catch_rate: 190,
  hp_base: 45,
  attack_base: 49,
  defense_base: 49,
  speed_base: 45,
  special_base: 60,
  exp_base: 0,
  normal:[], 
  weak:[], 
  immune:[], 
  resistant:[],
  level_rate:0,
  back_img:"1_back.png",
  front_img:"1_front.png",
  move1:m.move1,
  move2:m.move5,
  move3:m.move10,
  move4:m.move35
});

module.exports.poke115 = new p.Pokemon({
  name: "Kangaskhan", 
  number: 115,
  types: [1],
  level: 5,
  catch_rate: 190,
  hp_base: 105,
  attack_base: 95,
  defense_base: 80,
  speed_base: 80,
  special_base: 40,
  exp_base: 0,
  normal:[], 
  weak:[], 
  immune:[], 
  resistant:[],
  level_rate:0,
  back_img:"115_back.png",
  front_img:"115_front.png",
  move1:m.move1,
  move2:m.move5,
  move3:m.move10,
  move4:m.move35
});

module.exports.poke131 = new p.Pokemon({
  name: "Lapras", 
  number: 131,
  types: [1],
  level: 5,
  catch_rate: 45,
  hp_base: 135,
  attack_base: 85,
  defense_base: 80,
  speed_base: 60,
  special_base: 95,
  exp_base: 0,
  normal:[], 
  weak:[], 
  immune:[], 
  resistant:[],
  level_rate:0,
  back_img:"131_back.png",
  front_img:"131_front.png",
  move1:m.move1,
  move2:m.move5,
  move3:m.move10,
  move4:m.move35
});