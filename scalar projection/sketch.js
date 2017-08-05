var a, b, mouse;

function setup() {
  createCanvas(800, 400);
  a = createVector(10 , height-height/3);
  b = createVector(width - 10 , height/2);
  mouse = createVector(mouseX, mouseY);
}

function draw() {
  background(255);
  mouse.x = mouseX - 10;
  mouse.y = mouseY - 10;

  fill(0);
  ellipse(a.x, a.y, 4, 4);
  fill(0);
  ellipse(b.x, b.y, 4, 4);
  fill(255, 0, 0);
  ellipse(mouse.x, mouse.y, 8, 8);
  stroke(0);
  strokeWeight(2);
  line(a.x, a.y, b.x, b.y);
  line(a.x, a.y, mouse.x, mouse.y);
  var sp = projection(mouse, a, b);
  fill(0, 255, 0);
  ellipse(sp.x, sp.y, 8, 8);
}

function projection(p, a, b){
  var ap = p5.Vector.sub(p, a);
  var ab = p5.Vector.sub(b, a);

  ab.normalize();
  ab.mult(ap.dot(ab));

  var normal = p5.Vector.add(a, ab);
  return normal;
}
