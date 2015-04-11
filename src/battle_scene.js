var display = function() {

var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window({ fullscreen: true });

//144x168
var opponent_view = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 56),
  backgroundColor: 'white'
});
  
var self_view = new UI.Rect({
  position: new Vector2(0, 56),
  size: new Vector2(144, 56),
  backgroundColor: 'white'
});
  
var menu_view = new UI.Rect({
  position: new Vector2(0, 112),
  size: new Vector2(144, 56),
  backgroundColor: 'white'
});
  
var opponent_name = new UI.Text({
  position: new Vector2(5, 0),
  size: new Vector2(56, 15),
  font: 'gothic-18',
  color: 'black',
  text: 'PIKACHU'
});
  
var opponent_health_bar = new UI.Rect({
  position: new Vector2(5, 30),
  size: new Vector2(56, 10),
  backgroundColor: 'black'
});
  
var opponent_health = 10;
  
var opponent_health_level = new UI.Rect({
  position: new Vector2(6, 31),
  size: new Vector2(opponent_health, 8),
  backgroundColor: 'white'
});
  
var opponent_image = new UI.Image({
  position: new Vector2(88, 0),
  size: new Vector2(56, 56),
  image: 'images/25_front.png'  
});
  
var self_name = new UI.Text({
  position: new Vector2(66, 56),
  size: new Vector2(56, 15),
  font: 'gothic-18',
  color: 'black',
  text: 'PIKACHU'
});
  
var self_health_bar = new UI.Rect({
  position: new Vector2(66, 86),
  size: new Vector2(56, 10),
  backgroundColor: 'black'
});
  
var self_health = 10;
  
var self_health_level = new UI.Rect({
  position: new Vector2(67, 87),
  size: new Vector2(self_health, 8),
  backgroundColor: 'white'
});
    
var self_image = new UI.Image({
  position: new Vector2(0, 56),
  size: new Vector2(56, 56),
  image: 'images/25_back.png'  
});
  

// Add Rect to Window
window.add(opponent_view);
window.add(self_view);
window.add(menu_view);
window.add(opponent_name);
window.add(opponent_health_bar);
window.add(opponent_health_level);
window.add(opponent_image);
window.add(self_name);
window.add(self_health_bar);
window.add(self_health_level);
window.add(self_image);
  
  
// Show the Window
window.show();

window.on('click', 'up', function() {


});

};

module.exports = display;