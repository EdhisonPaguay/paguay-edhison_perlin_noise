let noiseTime = 0;
let noiseTam = 100;
let osc, playing, freq, amp;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator("triangle");
}

function draw() {
  let posX = map(noise(noiseTime), 0, 1, 0, windowWidth);
  let posY = map(noise(noiseTime + 10), 0, 1, 0, windowHeight);
  noiseTime += 0.01;
  noiseTam += 0.01;

  osc.start();
  freq = constrain(map(posX, 0, windowWidth, 500, 300), 300, 500);
  amp = constrain(map(posX, height, 0, 0, 1), 0, 1);
  osc.freq(freq, 0.01);
  osc.amp(amp, 0.15);

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
