// to use d3 v6 to load external json, use a js promise
//remember, that time elapses after asked to load 
//so the code that runs AFTER json loaded has to be in a function




d3.json('data.json').then(
  function graph(b) {

      

    //check out data in console
    console.log(b);

    //call d3 and make parent svg
    let r = d3.select("body")
      .append("svg")
      .attr("width", 500)
      .attr("height", 500);

    //create svg rectangle shapes inside parent svg
    let v = r.selectAll("rect")
      .data(b)
      .enter()
      .append("rect")
      .attr("fill", function (b) {
      return b.object2;
    })
      .attr("y", 0)
      .attr("width", 15)
      .attr("x", function (b, i) {
        return i * 25;
      })

      .attr("height", function (b) {
        return b.object1 * 15;
      })

      .attr("data-obj1", function (b) {
        return b.words;
      })
      .on("click", barClick);

  }
);


//function runs when user clicks rect in graph from d3 svg
function barClick(d3clickObject) {

  document.getElementById("message").innerHTML = d3clickObject.target.dataset.obj1;
}


graph(b);
barClick();