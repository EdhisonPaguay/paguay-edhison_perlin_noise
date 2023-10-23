let noiseTime = 0;
let noiseTam = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  noiseTime += 0.009;
  noiseTam += 0.01;

  let tam = map(noise(noiseTam), 0, 1, 50, 5);

  fill(random(100, 255), random(50, 255), random(200, 220));
  stroke(255, 0);
  strokeWeight(4);
  circle(posX, posY, tam);

  // Reflejar
  let posXRight = windowWidth - posX;
  fill(random(50, 100));
  circle(posXRight, posY, tam + 05);
}
