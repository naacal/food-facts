function initialise(data, svg) {    
  
  // Create the defailed nutrition box
  var nutrientchart = d3.select("#nutrients").append("div")
    .attr("class", "dominant-nutrients")
    .classed("hidden", true);
  
  // Add detailed nutrition info header
  nutrientchart.append("div")
      .text("Main Nutrients")
      .attr
      ({
        id: "main-nutrient-item",
        class: "nutrient-item"
      });
  
  // Create GDA fulfillment box
  var gda = d3.select("#GDA")
        .append("div")
        .attr("class", "gda")
        .text("Guidline Amount Fulfillment");
  
  // Create the selection menu, defailed info box, GDA fulfillment box
  for (var i = 0; i < nutrients.length; i++) {
    
    // Create selection menu sections
    var div = d3.select("#menu")
      .append("div")
      .text(nutrients[i].charAt(0).toUpperCase() + nutrients[i].slice(1))
      .attr
      ({
        id: nutrients[i],
        class: "menu-item"
      })
      .on("click", mouseclick);
      if(nutrients[i] == selected_nutrient)
        div.style("color", "#FF3030");
    
    // Create detailed info sections
    nutrientchart.append("div")
      .text(nutrients[i])
      .attr
      ({
        id: nutrients[i] + "-nutrient-item",
        class: "nutrient-item"
      });
    
    // Create GDA Fulfillment sections
    gda.append("div")
      .attr("id", nutrients[i])
      .attr("class", "gda-nutrient")
      .append("div")
      .text(nutrients[i].charAt(0).toUpperCase() + nutrients[i].slice(1))
      .attr("id", nutrients[i] + "-progress")
      .append("span")
      .attr("class", "gda-percentage")
      .text("0%");
  }

  // Fired when a menu box is selected
  function mouseclick() {
    if (this.id != selected_nutrient) {
      
      // Set all backgrounds to default
      d3.selectAll(".menu-item")
        .style("color", "#fff");

      // Set selected box to highlighted color
      d3.select("#" + this.id)
        .transition()
        .duration(100)
        .style("color", "#FF3030");
      
      // Update the selection variable with the new id
      selected_nutrient = this.id;
      
      // Remove all displayed nodes and regenerate graph
      d3.selectAll(".force-scale-node").remove();
      getScale(data, svg, selected_nutrient);
    }
  }  
}