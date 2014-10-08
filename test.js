var CanvasGraph = require('./');

var obj = {
	val1 : 30,
	val2 : 0
}
var speed1 = .001;
var speed2 = .01;
var graph = new CanvasGraph();
graph.addValue(obj, 'val1', '#00ff00', 'test value 1', -1, 1);
graph.addValue(obj, 'val2', '#0000ff', 'test value 2', -1, 1);
setInterval(function(){
		var d = new Date();
		var ms = d.getTime();
		obj.val1 = Math.sin(ms * speed1);
		obj.val2 = Math.sin(ms * speed2);
	},
1000/60)