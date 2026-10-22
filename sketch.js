function setup() {
  createCanvas(800, 784);
  background(240);
}

function draw() {
  
  strokeWeight(7)
  line(0, height/2.5, width, height/2.5);
  line(0, height/1.5, width, height/1.5)
  line(width/2.2, 0, width/2.2, height)

  strokeWeight(7)
  line(width/1.3, 525, width/1.3, height/0.2)

  strokeWeight(5)
  line(width/9, 900, width/9, height/1.5)

  strokeWeight(7)
  line(width/2.2, height/1.05, width/1.3, height/1.05)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
