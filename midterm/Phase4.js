function setup() {
  createCanvas(400, 400)
}

function glasses(x, y) {
  fill(255)
  ellipse(x + 7.5, y + 5, 15, 10)
  ellipse(x + 27.5, y + 5, 15, 10)
  fill(0)
  rect(x + 15, y + 5, 5, 1)
  quad(x, y + 5, x + 15, y + 25, x, y + 5.1, x + 15, y + 25.1)
  quad(x + 35, y + 5, x + 50, y + 25, x + 35, y + 5.1, x + 50, y + 25.1)
}

function draw() {
  background(204);
  let tileWidth = 50;
  let tileHeight = 50;

  for (let x = 0; x < width; x += tileWidth) {
    for (let y = 0; y < height; y += tileHeight) {
      glasses(x, y, tileWidth, tileHeight);
    }
  }
}