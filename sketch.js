let noiseTime = 0;
let noiseTam = 100;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  noiseTime += 0.01;
  noiseTam += 0.01;

  let tam = map(noise(noiseTam), 0, 1, 50, 5);

  fill(182, 81, 237);
  stroke(255, 0);
  strokeWeight(4);
  circle(posX, posY, tam - 10);

  // Reflejar
  let posXRight = windowWidth - posX;
  fill(81, 255, 237);
  circle(posXRight, posY, tam - 10);
}
function mousePressed() {
  // al hacer click podemos cambiar el fondo
  let rojo = random(255);
  let verde = random(255);
  let azul = random(255);
  background(rojo, verde, azul);
}
