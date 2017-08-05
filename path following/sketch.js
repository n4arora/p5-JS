var vehicles = [];
var target;
var path;

function setup() {
  createCanvas(windowWidth - 10, windowHeight - 10);
  path = new Path();
}

function mousePressed(){
  vehicles.push(new Vehicle(mouseX, mouseY));
}

function draw() {
  background(55);
  ellipseMode(CENTER);

  for(var i = 0; i < vehicles.length; i++){
    vehicles[i].follow(path);
    vehicles[i].edges()
    vehicles[i].update();
    vehicles[i].show();
  }

  //ellipse(target.x, target.y, 40*2);

  path.showPath();

}
