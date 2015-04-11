var UI = require('ui');
var Vector2 = require('vector2');

// Create the Window
var window = new UI.Window({ fullscreen: true });

// Create a background Rect
var opponent_view = new UI.Rect({
  position: new Vector2(0, 0),
  size: new Vector2(144, 84),
  backgroundColor: 'white'
});

var self_view = new UI.Rect({
  position: new Vector2(0, 84),
  size: new Vector2(144, 84),
  backgroundColor: 'black'
});

//144x168
// Add Rect to Window
window.add(opponent_view);
window.add(self_view);

// Create TimeText
var timeText = new UI.TimeText({
  position: new Vector2(0, 168),
  size: new Vector2(144, 30),
  text: "%H:%M",
  font: 'bitham-42-bold',
  color: 'black',
  textAlign: 'center'
});



// Add the TimeText
//window.add(timeText);

// Show the Window
window.show();

window.on('click', 'up', function() {


});

// Get new position
var pos = timeText.position();
pos.y -= 145;

// Start animation
timeText.animate('position', pos, 1000);

