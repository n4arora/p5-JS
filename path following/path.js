function Path(){
  this.startPoint = createVector(0, height/3);
  this.endPoint = createVector(width, height - height/3);;
  this.radius = 25;

  this.showPath = function(){
    stroke(255);
    line(this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);

    beginShape();
    fill(196, 100);
    noStroke();
    vertex(this.startPoint.x , this.startPoint.y + this.radius);
    vertex(this.endPoint.x, this.endPoint.y + this.radius);
    vertex(this.endPoint.x, this.endPoint.y - this.radius);
    vertex(this.startPoint.x, this.startPoint.y - this.radius);
    endShape();
  }

}
