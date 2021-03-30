// Create a raster item using the image tag with id='mona'
var raster = new Raster("bgImg");

// Move the raster to the center of the view
raster.position = view.center;

// Scale the raster by 50%
//raster.scale(0.5);
// The minimum distance the mouse has to drag
// before firing the next onMouseDrag event:
tool.minDistance = 5;

var path;

tool.onMouseDown = function(event) {
  // Create a new path every time the mouse is clicked
  path = new Path();
  path.add(event.point);
  path.strokeColor = "cyan";
  path.strokeWidth = 4;
  var myCircle = new Path.Circle({
    center: event.point,
    radius: 5
  });
  myCircle.strokeColor = "magenta";
  myCircle.fillColor = "magenta";
};

tool.onMouseDrag = function(event) {
  path.add(event.point);
};

tool.onMouseUp = function(event) {
  path.simplify(20);
  var myCircle = new Path.Circle({
    center: event.point,
    radius: 5
  });
  myCircle.strokeColor = "magenta";
  myCircle.fillColor = "magenta";
};

function onKeyDown(event) {
	if(event.key == 'a') {
		var paths = path.pop();
  paths.remove();
	}
}