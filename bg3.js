let angle = 0;
let train;

function preload() {
  train = loadModel('res/swoosh.obj');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(255, 255, 255);
  ambientLight(0, 0, 200);
  directionalLight(0, 0, 255, 0, 0, -4);
scale(windowWidth/900);
  rotateY(angle);
  noStroke();
  
  // Set the transparency with an alpha value (0 for fully transparent, 255 for fully opaque)
  fill(0, 0, 255, 128); // 128 is the alpha value for transparency
  
  translate(0, 0, 0);
  
  // Or use specularMaterial with an alpha value
  // specularMaterial(0, 0, 255, 128);
  
  model(train);
  angle += 0.01;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(239,239,239);
}
