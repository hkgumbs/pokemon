var BASE_KEY = "POKEBELT_";
// TODO multiple pokemon, based on index

var Pokebelt = {
    get : function(index) {
        // var pokemon = localStorage.get(BASE_KEY);
        // if (pokemon === null) {            
          var pok = {name: 'PIKACHU', health: 15, image_front: 'images/25_front.png', image_back: 'images/25_front.png'};
          return pok;
        // } else
        //     return JSON.parse(pokemon);
    },

    save : function(index, pokemon) {
        localStorage.set(BASE_KEY, JSON.stringify(pokemon));
    }
};

module.exports = Pokebelt;
