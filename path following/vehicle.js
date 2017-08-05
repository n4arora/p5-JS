function Vehicle(x, y){
  this.position = createVector(x, y);
  this.velocity = createVector(1, 0);
  this.acceleration = createVector(0, 0);
  this.maxSpeed = 5;
  this.maxForce = 2;

  this.applyForce = function(f){
    this.acceleration.add(f);
  }

  this.follow = function(path){
    var predict = this.velocity.copy();
    predict.setMag(50);

    var future = p5.Vector.add(this.position, predict);

    var a = path.startPoint;
    var b = path.endPoint;

    var normalPoint = scalarProjection(future, a, b);

    var dir = p5.Vector.sub(b, a);
    dir.normalize();


    var target = p5.Vector.add(dir, normalPoint);

    var d = p5.Vector.dist(future, normalPoint);

    if(d > path.radius){
      this.seek(target);
    }

    fill(255, 0, 0);
    ellipse(normalPoint.x, normalPoint.y, 4*2);


  }

  var scalarProjection = function(point, a, b){
    var ap = p5.Vector.sub(point, a);
    var ab = p5.Vector.sub(b, a);
    ab.normalize();
    ab.mult(ap.dot(ab));
    var normal = p5.Vector.add(a, ab);
    return normal;
  }

  this.seek = function(target){
    var desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);
    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  this.update = function(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.acceleration.mult(0);
  }

  this.edges = function(){
    if(this.position.x > width){
      this.position.x = 0;
    }
  }

  this.show = function(){
    noStroke()
    fill(100, 200, 196, 150);
    ellipseMode(CENTER);
    push();
    translate(this.position.x, this.position.y);
    ellipse(0, 0, 10*2);
    stroke(255);
    strokeWeight(4);
    var head = new p5.Vector(this.velocity.x, this.velocity.y);
    head.setMag(15);
    line(0, 0, head.x, head.y);
    pop();
  }
}
