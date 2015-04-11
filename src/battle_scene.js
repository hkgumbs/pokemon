function BattleScene(s, o, callback) {
  
  this.self = s;
  this.opponent = o;
  
  //var bb = new BattleBrain(this.self, this.opponent);
  
  var UI = require('ui');
  var Vector2 = require('vector2'); 
  // Create the Window
  var window = new UI.Window({ fullscreen: true });
    
  this.attack_screen = function() {
  
 
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
<<<<<<< HEAD
      position: new Vector2(5, 30),
=======
      position: new Vector2(7, 30),
>>>>>>> c58cac2d3921de13f427dd046f78adc26d0e8238
      size: new Vector2(80, 16),
      image: 'images/opponent_health_dec.png' 
    });
        
    var opponent_health_bar = new UI.Rect({
      position: new Vector2(10, 34),
      size: new Vector2(56, 8),
      backgroundColor: 'black'
    });
            
    var opponent_health_level = new UI.Rect({
      position: new Vector2(11, 35),
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
    
    /*
<<<<<<< HEAD
    var self_level = new UI.Text({
      position: new Vector2(66, 56),
      size: new Vector2(56, 15),
      font: 'gothic-14-bold',
      color: 'black',
      text: this.self.level
    });*/
    
    
    var self_health_dec = new UI.Image({
      position: new Vector2(61, 93),
      size: new Vector2(80, 16),
      image: 'images/self_health_dec.png' 
    });
=======
    var self_health_dec = new UI.Image({
      position: new Vector2(7, 30),
      size: new Vector2(80, 16),
      image: 'images/self_health_dec.png' 
    });*/
>>>>>>> c58cac2d3921de13f427dd046f78adc26d0e8238
  
    var self_health_bar = new UI.Rect({
      position: new Vector2(76, 96),
      size: new Vector2(56, 10),
      backgroundColor: 'black'
    });
  
  
    var self_health_level = new UI.Rect({
      position: new Vector2(77, 97),
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
    window.add(self_health_dec);    
    window.add(self_health_bar);
    window.add(self_health_level);
    window.add(self_image);
    window.add(menu);
  
  
    // Show the Window
    window.show();
  
    window.on('click', 'up', function() {
      
    
    });
  
  };
  
  if(callback){
    // Create attack menu here
    /*
    var move_1 = new UI.Text({
      position: new Vector2(20, 122),
      size: new Vector2(20, 8),
      font: 'gothic-18',
      color: 'black',
      text: 'move1'
    });
    
    var x_coordinates = [];
    var y_coordinates = [];
    var arrow_position = 0;
    
    var arrow_image = new UI.Image({
      position: new Vector2(x_coordinates[0], y_coordinates[0]),
      size: new Vector2(9, 14),
      image: 'images/arrow.png'  
    });
        
   	window.on('click', 'down', function(e){    
      if(arrow_position > 0)
         arrow_position -= 1;       
      var pos = arrow_image.position();
      pos.y = y_coordinates[arrow_position];
      pos.x = x_coordinates[arrow_position];
      arrow_image.animate('position', pos, 0);
    });
    
    window.add(move_1);*/
    
  	window.on('click', 'up', function(e){
      var menu = new UI.Menu({
        sections: [{
          items: [{
            title: 'Move 1'//this.self.moves[0]
          }, {
            title: 'Move 2'//this.self.moves[1]
          }, {
            title: 'Move 3'//this.self.moves[2]
          }, {
            title: 'Move 4'//this.self.moves[3]
          }]
        }]
      });
      
      menu.on('select', function(e) {
        //call brandon's method
        //Go to "waiting" screen
        console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
        console.log('The item is titled "' + e.item.title + '"');
      });
        
      menu.show();
    });
  }  

}

  
module.exports = BattleScene;
