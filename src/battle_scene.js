var BattleBrain = require('./battle_brain');

function BattleScene(s, o) {
  var myself = this;
  myself.callback = null;
  var self = s;
  var opponent = o;
  var brain = new BattleBrain(self, opponent);
  
  var UI = require('ui');
  var Vector2 = require('vector2'); 
  // Create the Window
  var window = new UI.Window({ fullscreen: true });
  
  //var smartie = new UI.Window();
  
  var animate_elt = function(img) {
        var pos = img.position();
        pos.x += 7;
        img.animate({ position: pos});
        setTimeout(function(){ pos.x -= 7; img.animate({ position: pos}); }, 400);
  };
  
  var update_battlefield = function(field, animate) {
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
    
    //var menu_view = new UI.Rect({
    //  position: new Vector2(0, 112),
    //  size: new Vector2(144, 56),
    //  backgroundColor: 'white'
    //}); 
  
    var opponent_name = new UI.Text({
      position: new Vector2(5, 0),
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: opponent.name
    });
    
    var opponent_level = new UI.Text({
      position: new Vector2(27, 14),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ':L' + opponent.level
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
    
    var ohp = opponent.hp_base - opponent.hp_taken;
    if(opponent.faint){
        ohp = 0;
    }
    var ohp_bar = Math.ceil(ohp/opponent.hp_base * 60);
            
    var opponent_health_level = new UI.Rect({
      position: new Vector2(11, 36),
      size: new Vector2(ohp_bar, 4),
      backgroundColor: 'white'
    });
  
    var opponent_image = new UI.Image({
      position: new Vector2(88, 0),
      size: new Vector2(56, 56),
      image: opponent.image_front 
    });
  
    var self_name = new UI.Text({
      position: new Vector2(66, 56),
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: self.name
    });
        
    var self_level = new UI.Text({
      position: new Vector2(90, 70),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ':L' + self.level
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
  
    var shp = self.hp_base - self.hp_taken;
    if(self.faint){
        shp = 0;
    }
    var shp_bar = Math.ceil(shp/self.hp_base * 60);
    
    
    var self_health_level = new UI.Rect({
      position: new Vector2(74, 92),
      size: new Vector2(shp_bar, 4),
      backgroundColor: 'white'
    });
    
    var self_hp = new UI.Text({
      position: new Vector2(83, 94),
      size: new Vector2(56, 15),
      font: 'gothic-14-bold',
      color: 'black',
      text: shp + '/' + self.hp_base
    });
  
    var self_image = new UI.Image({
      position: new Vector2(0, 56),
      size: new Vector2(56, 56),
      image: self.image_back  
    }); 
      
    
 
    // Add Rect to Window
    field.add(opponent_view);
    field.add(self_view);
    field.add(opponent_name);
    field.add(opponent_level);
    field.add(opponent_health_dec);
    field.add(opponent_health_bar);
    field.add(opponent_health_level);
    field.add(opponent_image);
    field.add(self_name);
    field.add(self_level);
    field.add(self_health_dec);    
    field.add(self_health_bar);
    field.add(self_health_level);
    field.add(self_hp);
    field.add(self_image);
    
    if(animate){
      animate_elt(self_image);
    }
    
    //window.show();
  };
   
  //-----------------------------------
//  Your turn
  
    var display_message = function(field,msg){
      var message = new UI.Text({
        position: new Vector2(20, 119),
        size: new Vector2(56, 15),
        font: 'gothic-18',
        color: 'black',
        text: msg
      });   
      
      field.add(message);
      return message;
    };
  
    /*this.attack_screen = function(damage, cb) {
      brain.apply_damage(damage);
      update_battlefield();
      //display_message();
      window.show();
    };
  
    var post_attack = function(msg){
      window.on('click', 'up', function(e){ });
      window.on('click', 'down', function(e){ });
      window.on('click', 'select', function(e){ });
      update_battlefield();
      display_message(msg);
      window.show();
    };*/
  
  var menu_border = function(field) {
    var menu = new UI.Image({
        position: new Vector2(0, 112),
        size: new Vector2(144, 56),
        image: 'images/menu.png'  
      });

      field.add(menu);
  };
  
    var post_attack = function(msg) {
        var dummy = new UI.Window({ fullscreen: true });
        update_battlefield(dummy,true);
        menu_border(dummy);
        //var mess = display_message(dummy,msg);
        if(opponent.faint){
          display_message(dummy,"WINNER!");
        } else {
          display_message(dummy,msg);
        }
        window.hide();
        /*dummy.on('click', 'select', function(e){
          dummy.remove(mess);
          display_message(dummy,"Waiting...");
          dummy.show();
        });*/
        window = dummy;
        window.show();
    };
  
    this.wait_screen = function() {
        var dummy = new UI.Window({ fullscreen: true });
        update_battlefield(dummy);
        menu_border(dummy);
        if(opponent.faint){
          display_message(dummy,"WINNER!");
        } else {
          display_message(dummy,"Waiting...");
        }
        window.hide();
        window = dummy;
        window.show();
        //smartie.close();
        //smartie = dummy();
    };
      
    var attack_menu = function(field){
      // Create attack menu here
      
      
      var x_coordinates = [11, 11, 71, 71];
      var y_coordinates = [124, 140, 124, 140];

      var move_1 = new UI.Text({
        position: new Vector2(20, 123),
        size: new Vector2(60, 8),
        font: 'gothic-14',
        color: 'black',
        text: self.moves[0].name
      });

      var move_2 = new UI.Text({
        position: new Vector2(20, 139),
        size: new Vector2(60, 8),
        font: 'gothic-14',
        color: 'black',
        text: self.moves[1].name
      });
      
      var move_3 = new UI.Text({
        position: new Vector2(80, 123),
        size: new Vector2(60, 8),
        font: 'gothic-14',
        color: 'black',
        text: self.moves[2].name
      });
      
      var move_4 = new UI.Text({
        position: new Vector2(80, 139),
        size: new Vector2(60, 8),
        font: 'gothic-14',
        color: 'black',
        text: self.moves[3].name
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

      field.add(move_1);
      field.add(move_2);
      field.add(move_3);
      field.add(move_4);
      field.add(arrow_images[arrow_position]);

      field.on('click', 'up', function(e){    
        if(arrow_position > 0){          
          field.remove(arrow_images[arrow_position]);
          arrow_position -= 1;  
          field.add(arrow_images[arrow_position]);
        }       
      });   
      
      field.on('click', 'down', function(e){    
        if(arrow_position < 3){
          field.remove(arrow_images[arrow_position]);
          arrow_position += 1;  
          field.add(arrow_images[arrow_position]);
        }        
      });   
      
      field.on('click', 'select', function(e){
        brain.calculate_attack(self.moves[arrow_position],myself.callback);
        if(self.hp_taken >= self.hp_base){
            self.faint = true;
          }
    
        if(opponent.hp_taken >= opponent.hp_base){
            opponent.faint = true;
        }
        post_attack(/*self.name + " used " + */self.moves[arrow_position].name);
        //post_attack(self.name + " used " + self.moves[arrow_position]);
      });   
      
      field.on('longClick', 'select', function(e){
        
      });

    };
  
    this.attack_screen = function(cb) {
        myself.callback = cb;
        var dummy = new UI.Window({ fullscreen: true });
        update_battlefield(dummy);
        menu_border(dummy);
        if(self.faint){
          display_message(dummy,"FAINTED!");
        } else {
          attack_menu(dummy);
        }
        window.hide();
        window = dummy;
        window.show();
        //smartie.close();
        //smartie = dummy();
    };

//---------------------------------------------------

  /*if(callback){
    //this.display_attack();
    this.attack_menu();
  }*/
  
  
  //this.print_offense_window = function(){
  //  this.battle_field();
  //  this.attack_menu();
  //  window.show();  
  //};
  
  //this.print_defense_window = function(){
  //  this.battle_field();
  //  this.attack_menu();
  //  window.show();  
  //};
  // Show the Window

  

}

  
module.exports = BattleScene;

//var BattleStuff = require('./battle_stuff');
/*var BattleBrain = require('./battle_brain');

function BattleScene(s, o) {
  
  var self = s;
  var opponent = o;
  //var stuff = new BattleStuff(self,opponent);
  var brain = new BattleBrain(self, opponent);
  //var bb = new BattleBrain(this.self, this.opponent);
  
  var UI = require('ui');
  var Vector2 = require('vector2'); 
  // Create the Window
  var window = new UI.Window({ fullscreen: true });
    
  var update_battlefield = function() {
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
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: opponent.name
    });
    
    var opponent_level = new UI.Text({
      position: new Vector2(27, 14),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ":L" + opponent.level//':L55'
    });
    
    var opponent_health_dec = new UI.Image({
      position: new Vector2(5, 33),
      size: new Vector2(80, 16),
      image: 'images/opponent_health_dec.png' 
    });
        
    var opponent_health_bar = new UI.Rect({
      position: new Vector2(10, 35),
      size: new Vector2(62, 6),
      backgroundColor: 'white'
    });
       
    var ohp = opponent.hp_base - opponent.hp_taken;
    var ohp_bar = Math.ceil(ohp/opponent.hp_base * 60);
    
    var opponent_health_level = new UI.Rect({
      position: new Vector2(11, 36),
      size: new Vector2(ohp_bar, 4),
      backgroundColor: 'black'
    });
  
    var opponent_image = new UI.Image({
      position: new Vector2(88, 0),
      size: new Vector2(56, 56),
      image: opponent.image_front 
    });
  
    var self_name = new UI.Text({
      position: new Vector2(66, 56),
      size: new Vector2(88, 15),
      font: 'gothic-18',
      color: 'black',
      text: self.name
    });
        
    var self_level = new UI.Text({
      position: new Vector2(90, 70),
      size: new Vector2(56, 15),
      font: 'gothic-18-bold',
      color: 'black',
      text: ':L' + self.level//':L61'
    });    
    
    var self_health_dec = new UI.Image({
      position: new Vector2(61, 93),
      size: new Vector2(80, 16),
      image: 'images/self_health_dec.png' 
    });
  
    var self_health_bar = new UI.Rect({
      position: new Vector2(73, 91),
      size: new Vector2(62, 6),
      backgroundColor: 'white'
    });  
  
    var shp = self.hp_base - self.hp_taken;
    var shp_bar = Math.ceil(shp/self.hp_base * 60);
    
    var self_health_level = new UI.Rect({
      position: new Vector2(74, 92),
      size: new Vector2(shp_bar, 4),
      backgroundColor: 'black'
    });
    
    var self_hp = new UI.Text({
      position: new Vector2(83, 94),
      size: new Vector2(56, 15),
      font: 'gothic-14-bold',
      color: 'black',
      text: shp + '/' + self.hp_base
    });
  
    var self_image = new UI.Image({
      position: new Vector2(0, 56),
      size: new Vector2(56, 56),
      image: self.image_back  
    });
      
    var menu = new UI.Image({
      position: new Vector2(0, 112),
      size: new Vector2(144, 56),
      image: 'images/menu.png'  
    });
    
=======
    
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1
 
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
<<<<<<< HEAD
    window.add(menu);
    
    // Show the Window
    //window.show();
    
  };
  
    var display_message = function(msg){         
      var message = new UI.Text({
        position: new Vector2(20, 119),
        size: new Vector2(56, 15),
        font: 'gothic-18',
        color: 'black',
        text: msg
      });   
      
      window.add(message);
    };
  
    var used_screen = function (){
      update_battlefield();
      window.on('click', 'up', function(e){});
      display_message(self.name + " used " + opponent.name);
    };
  
  var attack_menu = function(){
    // Create attack menu here
    
    //var self = this.self;
    //var atk_scn = this.attack_screen;
    //var opponent = this.opponent;
    
  	window.on('click', 'up', function(e){
      var menu = new UI.Menu({
        sections: [{
          items: [{
            title: self.moves[0].name, //'Move 1'//this.self.moves[0]
            subtitle: self.moves[0].pp
          }, {
            title: self.moves[1].name,//'Move 2'//this.self.moves[1]
            subtitle: self.moves[1].pp
          }, {
            title: self.moves[2].name,//'Move 3'//this.self.moves[2]
            subtitle: self.moves[2].pp
          }, {
            title: self.moves[3].name,//'Move 4'//this.self.moves[3]
            subtitle: self.moves[3].pp
          }]
        }]
      });
      
      menu.on('select', function(e) {
        //call brandon's method
        //Go to "waiting" screen
        console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
        console.log('The item is titled "' + e.item.title + '"');
        //menu.hide();
        brain.calculate_attack(self.moves[e.itemIndex],null);
        //var d = stuff.attack(e.itemIndex);
        //brain.apply_damage(dam);
        //menu.hide();
        //switch(condition){
        //  case 1:
        //}
        used_screen();
        menu.hide();
        //return self.moves[e.itemIndex];
      });
        
      menu.show();
    });
  }; 
   
  this.attack_screen = function(damage,cb){
      brain.apply_damage(damage);
      update_battlefield();
      if(cb){
        attack_menu();}
      window.show();
=======
  
    
 
    
         
    // Show the Window
    window.show();  

  
>>>>>>> acdb9099165340a3c7b7185a0e0a10acf31f9ae1
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

  
module.exports = BattleScene;*/
