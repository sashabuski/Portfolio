let cnv;
let bright = 99;
var clearSpeed = 1;
var inkhue = 0;

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style.zIndex = "2";
  x = vx = mouseX;
  y = vy = mouseY;
  v = r = 10;
  f = false;

  size = 50;
  spring = 0.6;
  friction = 0.5;
  splitNum = 5;
  diff = (size / 8) * 0.9;
  stroke(20, 50);
  background(239,239,239);
  framecount = 60;
}

function draw() {
  //fs = fullscreen();
  if (!f) {
    f = true;
    x = mouseX;
    y = mouseY;
  }
  vx += (mouseX - x) * spring;
  vy += (mouseY - y) * spring;
  vx *= friction;
  vy *= friction;

  noStroke();
  fill(255, 255, 255, 2.6);
  rectMode(CENTER);
  rect(width / 2, height / 2, width, height);

  v += sqrt(vx * vx + vy * vy) - v;
  v *= 0.8;

  oldR = r;
  r = size - v;

  let A = random (30,100);
  let R = 200;
  let G = 100;
  let B = 120;

  for (let i = 0; i < splitNum; ++i) {
    oldX = x;
    oldY = y;
    x += vx / splitNum;
    y += vy / splitNum;
    oldR += (r - oldR) / splitNum;
    stroke( inkhue, G, B, A);

    strokeWeight(oldR + diff);
    strokeCap(ROUND);
    line(x, y, oldX, oldY);

    strokeWeight(oldR);
    strokeCap(PROJECT);
    line(x + diff, y + diff, oldX + diff, oldY + diff);

    strokeWeight(r);
    strokeCap(PROJECT);
    line(x - diff * 0.5, y - diff * 0.5, oldX - diff * 0.5, oldY - diff * 0.5);

    if (mouseX < width && mouseY < height ) {
      inkhue = inkhue + 1.75;
    }
  }
}

function stroke() {}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(239,239,239);
}