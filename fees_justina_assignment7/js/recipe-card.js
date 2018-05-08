/*eslint-env browser*/

var favRecipes = {
    title: "Guacamole",
    servings: 4,
    ingredients: function () {
        "use strict";
        var ingredientsList = ["- 3 Avocados", "- 1 Lime", "- 1 Teaspoon Salt", "- 1/2 Cup Onion", "- 3 Tablespoons Cilantro", "- 2 Diced Tomatoes", "Garlic", "Ground Pepper"];
        
        for (var i = 0; i < ingredientsList[i].length; i++) {
            var displayList = (ingredientsList.toString());
        }
        
        return displayList;
    }
};

window.console.log(favRecipes.title.toUpperCase());
window.console.log("Serves: " + favRecipes.servings);
window.console.log(favRecipes.ingredients().split(",").join("\r\n"));

