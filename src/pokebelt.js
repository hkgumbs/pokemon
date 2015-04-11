BASE_KEY = "POKEBELT_";
// TODO multiple pokemon, based on index

var Pokebelt = {
    get : function(index) {
        var pokemon = localStorage.get(BASE_KEY);
        if (pokemon == null) {
            // return default pokemon
        } else
            return JSON.parse(pokemon);
    },

    save : function(index, pokemon) {
        localStorage.set(BASE_KEY, JSON.stringify(pokemon))
    }
};

module.exports = pokebelt;
