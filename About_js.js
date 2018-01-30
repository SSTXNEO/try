var dataset = [
	{ name: 'HTML', total: 9},
	{ name: 'rest', total: 1}
];
function draw(){
    var width=parseFloat(d3.select("#chart1").style("width")),
    height = 180,
    radius = Math.min(width, height) / 2;
var color = d3.scale.ordinal()
    .range(["#F77062", "#f8f8f8", "#FFCA00", "#45BFFF", "#ff8004", "#A5C0EE", "#E1F3E9"]);

var arc = d3.svg.arc()
    .outerRadius(radius - 10)
    .innerRadius(radius - 20);

var pie = d3.layout.pie()
    .sort(null)
	 .startAngle(1*Math.PI)
    .endAngle(3*Math.PI)
    .value(function(d) { return d.total; });
//console.log(width);
var svg = d3.select("#chart1").append("svg")
    .attr("id","svg1")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


 var g = svg.selectAll(".arc")
      .data(pie(dataset))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
    	.attr("transform", function(d) {
        var _d = arc.centroid(d);
        _d[0] *= 1.5;	//multiply by a constant factor
        _d[1] *= 1.5;	//multiply by a constant factor
        return "translate(" + _d + ")";
      })
      .attr("dy", ".50em")
      .style("text-anchor", "middle");

    g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("HTML&CSS");
var dataset2 = [
	{ name: 'CSS', total: 8},
	{ name: 'rest', total: 2}
];

  var svg2 = d3.select("#chart2").append("svg")
      .attr("id","svg2")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


 var g = svg2.selectAll(".arc")
      .data(pie(dataset2))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("JavaScript");

  var svg3 = d3.select("#chart3").append("svg")
      .attr("id","svg3")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var dataset3 = [
	{ name: 'JavaScript', total: 8},
	{ name: 'rest', total: 2}
];
 var g = svg3.selectAll(".arc")
      .data(pie(dataset3))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("Illustrator");

  var svg4 = d3.select("#chart4").append("svg")
      .attr("id","svg4")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var dataset4 = [
	{ name: 'Illustration', total: 6},
	{ name: 'rest', total: 4}
];
 var g = svg4.selectAll(".arc")
      .data(pie(dataset4))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("Photoshop");

  var dataset5 = [
	{ name: 'Photoshop', total: 8},
	{ name: 'rest', total: 2}
];
  var svg5 = d3.select("#chart5").append("svg")
      .attr("id","svg5")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
 var g = svg5.selectAll(".arc")
      .data(pie(dataset5))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("D3");
  var dataset6 = [
	{ name: 'Sketch', total: 9},
	{ name: 'rest', total: 1}
];
  var svg6 = d3.select("#chart6").append("svg")
      .attr("id","svg6")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
 var g = svg6.selectAll(".arc")
      .data(pie(dataset6))
      .enter().append("g")
      .attr("class", "arc");

  g.append("path")
	.style("fill", function(d) { return color(d.data.name); })
    .transition().delay(function(d,i) {
	return i * 500; }).duration(500)
	.attrTween('d', function(d) {
		var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
		return function(t) {
			d.endAngle = i(t);
			return arc(d)
			}
		});
  g.append("text")
	   .attr("text-anchor", "middle")
		 .attr('font-size', '1em')
		 .attr('y', 5)
	   .text("Python");

}
draw();
function redraw(){
    d3.select("#svg1").remove();
    d3.select("#svg2").remove();
    d3.select("#svg3").remove();
    d3.select("#svg4").remove();
    d3.select("#svg5").remove();
    d3.select("#svg6").remove();
    d3.select("#svg7").remove();
    d3.select("#svg8").remove();
    draw();
}

window.addEventListener("resize", redraw);