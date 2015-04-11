function BattleScene(s, o) {
  
  this.self = s;
  this.opponent = o;
  
  this.display = function() {
  
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
      text: this.opponent.name
    });
    
    var opponent_health_dec = new UI.Image({
      position: new Vector2(7, 30),
      size: new Vector2(72, 14),
      image: 'images/opponent_health_dec.png' 
    });
        
    var opponent_health_bar = new UI.Rect({
      position: new Vector2(10, 30),
      size: new Vector2(56, 8),
      backgroundColor: 'black'
    });
            
    var opponent_health_level = new UI.Rect({
      position: new Vector2(11, 31),
      size: new Vector2(this.opponent.health, 6),
      backgroundColor: 'white'
    });
  
    var opponent_image = new UI.Image({
      position: new Vector2(88, 0),
      size: new Vector2(56, 56),
      image: this.opponent.image_front 
    });
  
    var self_name = new UI.Text({
      position: new Vector2(66, 56),
      size: new Vector2(56, 15),
      font: 'gothic-18',
      color: 'black',
      text: this.self.name
    });
  
    var self_health_bar = new UI.Rect({
      position: new Vector2(66, 86),
      size: new Vector2(56, 10),
      backgroundColor: 'black'
    });
  
  
    var self_health_level = new UI.Rect({
      position: new Vector2(67, 87),
      size: new Vector2(this.self.health, 8),
      backgroundColor: 'white'
    });
  
    var self_image = new UI.Image({
      position: new Vector2(0, 56),
      size: new Vector2(56, 56),
      image: this.self.image_back  
    });
      
    var menu = new UI.Image({
      position: new Vector2(0, 112),
      size: new Vector2(144, 56),
      image: 'images/menu.png'  
    });
    
     var move_1 = new UI.Text({
      position: new Vector2(20, 122),
      size: new Vector2(20, 8),
      font: 'gothic-18',
      color: 'black',
      text: 'move1'
    });
    
    window.on('click', 'up', function(e) {
      var menu = new UI.Menu({
        sections: [{
          items: [{
            title: 'Move 1'
          }, {
            title: 'Move 2'
          }, {
            title: 'Move 3'
          }, {
            title: 'Move 4'
          }]
        }]
      });
      
      menu.on('select', function(e) {
        console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
        console.log('The item is titled "' + e.item.title + '"');
      });
        
      menu.show();
    });
     
  
    // Add Rect to Window
    window.add(opponent_view);
    window.add(self_view);
    window.add(menu_view);
    window.add(opponent_name);
    window.add(opponent_health_dec);
    window.add(opponent_health_bar);
    window.add(opponent_health_level);
    window.add(opponent_image);
    window.add(self_name);
    window.add(self_health_bar);
    window.add(self_health_level);
    window.add(self_image);
    window.add(menu);
    window.add(move_1);
  
  
    // Show the Window
    window.show();
  
    window.on('click', 'up', function() {
    
    
    });
  
  };

}
  
module.exports = BattleScene;
