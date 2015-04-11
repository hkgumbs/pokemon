function Move (move_dict) {
  this.name = move_dict.name;
  this.number = move_dict.number;
  this.type = move_dict.type;
  this.category = move_dict.category;
  this.pp = move_dict.pp;
  this.power = move_dict.power;
  this.accuracy = move_dict.accuracy;
  return this;
}

module.exports.move1 = new Move({
  name:"Pound",
  number:1,
  type:1,
  category:1,
  pp:35,
  power:40,
  accuracy:1.0
});

module.exports.move5 = new Move({
  name:"Mega Punch",
  number:5,
  type:1,
  category:1,
  pp:20,
  power:80,
  accuracy:0.85
});

module.exports.move10 = new Move({
  name:"Scratch",
  number:10,
  type:1,
  category:1,
  pp:35,
  power:40,
  accuracy:1.0
});

module.exports.move33 = new Move({
  name:"Tackle",
  number:33,
  type:1,
  category:1,
  pp:35,
  power:50,
  accuracy:1.0
});