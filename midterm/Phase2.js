function setup() {
  createCanvas(100, 100)
}

function draw() {
  background(204)
  fill(255)
  ellipse(30, 40, 15, 10)
  ellipse(50, 40, 15, 10)
  fill(0)
  rect(37.5, 40, 5, 1)
  quad(57.5, 40, 72.5, 60, 57.5, 40.1, 72.5, 60.1)
  quad(22.5, 40, 37.5, 60, 22.5, 40.1, 37.5, 60.1)
}
