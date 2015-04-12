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
    
    /*
    var menu_view = new UI.Rect({
      position: new Vector2(0, 112),
      size: new Vector2(144, 56),
      backgroundColor: 'white'
    }); */
  
    var opponent_name = new UI.Text({
      position: new Vector2(5, 0),
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: this.opponent.name
    });
    
    var opponent_level = new UI.Text({
      position: new Vector2(27, 14),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ':L55'
    });
    
    var opponent_health_dec = new UI.Image({
      position: new Vector2(5, 33),
      size: new Vector2(80, 16),
      image: 'images/opponent_health_dec.png' 
    });
        
    var opponent_health_bar = new UI.Rect({
      position: new Vector2(10, 35),
      size: new Vector2(62, 6),
      backgroundColor: 'black'
    });
            
    var opponent_health_level = new UI.Rect({
      position: new Vector2(11, 36),
      size: new Vector2(this.opponent.health, 4),
      backgroundColor: 'white'
    });
  
    var opponent_image = new UI.Image({
      position: new Vector2(88, 0),
      size: new Vector2(56, 56),
      image: this.opponent.image_front 
    });
  
    var self_name = new UI.Text({
      position: new Vector2(66, 56),
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: this.self.name
    });
        
    var self_level = new UI.Text({
      position: new Vector2(90, 70),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ':L61'
    });    
    
    var self_health_dec = new UI.Image({
      position: new Vector2(61, 93),
      size: new Vector2(80, 16),
      image: 'images/self_health_dec.png' 
    });
  
    var self_health_bar = new UI.Rect({
      position: new Vector2(73, 91),
      size: new Vector2(62, 6),
      backgroundColor: 'black'
    });  
  
    var self_health_level = new UI.Rect({
      position: new Vector2(74, 92),
      size: new Vector2(this.self.health, 4),
      backgroundColor: 'white'
    });
    
    var self_hp = new UI.Text({
      position: new Vector2(83, 94),
      size: new Vector2(56, 15),
      font: 'gothic-14-bold',
      color: 'black',
      text: '119/193'
    });
  
    var self_image = new UI.Image({
      position: new Vector2(0, 56),
      size: new Vector2(56, 56),
      image: this.self.image_back  
    });
      

    
 
    // Add Rect to Window
    window.add(opponent_view);
    window.add(self_view);
    window.add(opponent_name);
    window.add(opponent_level);
    window.add(opponent_health_dec);
    window.add(opponent_health_bar);
    window.add(opponent_health_level);
    window.add(opponent_image);
    window.add(self_name);
    window.add(self_level);
    window.add(self_health_dec);    
    window.add(self_health_bar);
    window.add(self_health_level);
    window.add(self_hp);
    window.add(self_image);
  
    
 
    
         
    // Show the Window
    window.show();  

  
  };
   
  //-----------------------------------
//  Your turn
  
    this.display_attack = function(player, move){
      
    };
      
    this.attack_menu = function(){
      // Create attack menu here
      var menu = new UI.Image({
        position: new Vector2(0, 112),
        size: new Vector2(144, 56),
        image: 'images/menu.png'  
      });

      window.add(menu);
      
      var x_coordinates = [11, 11, 71, 71];
      var y_coordinates = [124, 140, 124, 140];

      var move_1 = new UI.Text({
        position: new Vector2(20, 119),
        size: new Vector2(50, 8),
        font: 'gothic-14',
        color: 'black',
        text: 'move1'
      });

      var move_2 = new UI.Text({
        position: new Vector2(20, 135),
        size: new Vector2(50, 8),
        font: 'gothic-14',
        color: 'black',
        text: 'move2'
      });
      
      var move_3 = new UI.Text({
        position: new Vector2(80, 119),
        size: new Vector2(50, 8),
        font: 'gothic-14',
        color: 'black',
        text: 'move3'
      });
      
      var move_4 = new UI.Text({
        position: new Vector2(80, 135),
        size: new Vector2(50, 8),
        font: 'gothic-14',
        color: 'black',
        text: 'move4'
      });

      var arrow_position = 0;
      var arrow_images = [];

      arrow_images.push(new UI.Image({
        position: new Vector2(x_coordinates[0], y_coordinates[0]),
        size: new Vector2(9, 14),
        image: 'images/arrow.png'  
      }));  
      
     arrow_images.push(new UI.Image({
        position: new Vector2(x_coordinates[1], y_coordinates[1]),
        size: new Vector2(9, 14),
        image: 'images/arrow.png'  
      }));    
      
      arrow_images.push(new UI.Image({
        position: new Vector2(x_coordinates[3], y_coordinates[2]),
        size: new Vector2(9, 14),
        image: 'images/arrow.png'  
      }));    
      
      arrow_images.push(new UI.Image({
        position: new Vector2(x_coordinates[3], y_coordinates[3]),
        size: new Vector2(9, 14),
        image: 'images/arrow.png'  
      }));    

      window.add(move_1);
      window.add(move_2);
      window.add(move_3);
      window.add(move_4);
      window.add(arrow_images[arrow_position]);

      window.on('click', 'up', function(e){    
        if(arrow_position > 0){          
          window.remove(arrow_images[arrow_position]);
          arrow_position -= 1;  
          window.add(arrow_images[arrow_position]);
        }       
      });   
      
      window.on('click', 'down', function(e){    
        if(arrow_position < 3){
          window.remove(arrow_images[arrow_position]);
          arrow_position += 1;  
          window.add(arrow_images[arrow_position]);
        }        
      });   
      
      window.on('click', 'select', function(e){    
        //var move = this.self.moves[arrow_position]; 
        //get info from bb
        
      });   

    };

//---------------------------------------------------

    if(callback){
      //this.display_attack();
      this.attack_menu();
    }
  

}

  
module.exports = BattleScene;
