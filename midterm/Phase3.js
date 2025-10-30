function setup() {
  createCanvas(400, 400)
}
function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  background(204)
  fill(255)
  ellipse(30, 40, 15, 10)
  ellipse(50, 40, 15, 10)
  fill(0)
  rect(37.5, 40, 5, 1)
  quad(57.5, 40, 72.5, 60, 57.5, 40.1, 72.5, 60.1)
  quad(22.5, 40, 37.5, 60, 22.5, 40.1, 37.5, 60.1)
  pop()
}

function draw() {
  drawObject(0, 0, 1)
  drawObject(100, 100, 2)
}
