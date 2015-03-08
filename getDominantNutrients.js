function getDominantNutrients(data, foodIndex){

    // Initialise the nutrient data variables
    var nutrientdata = data[foodIndex].nutrients;
    var nutrientkeys = d3.keys(nutrientdata);
  
    // Populate the detailed nutrition box with values
    for (var i = -1; i < nutrients.length; i++) {
      d3.select("#" + (i == -1 ? "main" : nutrientkeys[i]) + "-nutrient-item")
          .html(function() 
          {
              if (i == -1) return ("Main Nutrients: " + data[foodIndex].food + " (100g)");
              else return (nutrientkeys[i] + "<span class=\"nutrient-amount\">" + nutrientdata[ nutrientkeys[i] ] + "g</span>")
          });
    }
}