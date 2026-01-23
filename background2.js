let cnv;
let bright = 99;
var clearSpeed = 1;
var inkhue = 0;
let a;
let rs = [];
let ls = [];

let c = '#1A2EFF';
let bg = '#efefef';



function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style.zIndex = "2";
  x = vx = mouseX;
  y = vy = mouseY;
  v = r = 10;
  f = false;
  a = min(windowWidth, windowHeight);
  
  size = 50;
  spring = 0.6;
  friction = 0.5;
  splitNum = 5;
  diff = (size / 8) * 0.9;
  stroke(20, 50);
  background(239,239,239);
  framecount = 60;

	
	for(let i=0; i<8; i++){
		rs.push(random(TAU));
		ls.push(random(2.6)+0.7);
	}
}

 
function draw() {
 
  /*background(bg);
	noStroke();
	fill(c);
	ellipse(a/10, a/8, a*1.35,a*1.35);
	
	stroke(bg);
	noFill();
	strokeWeight(a/25);
	for(let i=0; i<8; i++){
		let r = rs[i];
		arc(a/2, a/2, a/10*(i+1.6), a/10*(i+1.6),r,r+ls[i]);
	}
	noStroke();
	fill(c);
	for(let i=0; i<8; i++){
		let theta = rs[i]+ls[i];
		ellipse(a/2 + a/20*(i+1.6)*cos(theta),a/2 + a/20*(i+1.6)*sin(theta),a/32,a/32);
	}
	
	
	for(let i=0; i<8; i++){
		rs[i] += 0.005*(1-i/9);
		if(rs[i]>TAU || rs[i]<0)rs[i] = (rs[i]+TAU)%TAU;
	}
*/
 
  let cols = width/200; // Number of columns
  let rows = height/200; // Number of rows
  let cellWidth = width / cols;
  let cellHeight = height / rows;

  // Set stroke properties
  strokeWeight(1); // Set a smaller stroke weight
  stroke(0, 0, 255, 1); // Set a blue stroke color

  // Draw vertical lines
  for (let i = 1; i < cols; i++) {
    let x = i * cellWidth;
    line(x, 0, x, height);
  }

  // Draw horizontal lines
  for (let j = 1; j < rows; j++) {
    let y = j * cellHeight;
    line(0, y, width, y);
  }
 

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
  let R = 0;
  let G = 100;
  let B = 50;

  for (let i = 0; i < splitNum; ++i) {
    oldX = x;
    oldY = y;
    x += vx / splitNum;
    y += vy / splitNum;
    oldR += (r - oldR) / splitNum;
    stroke( B, G, inkhue, A);

    strokeWeight(oldR + diff);
    strokeCap(ROUND);
    line(x, y, oldX, oldY);

    strokeWeight(oldR);
    //strokeCap(PROJECT);
    line(x + diff, y + diff, oldX + diff, oldY + diff);

    strokeWeight(r);
    //strokeCap(PROJECT);
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

// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Video: https://youtu.be/FUI7HEEz9B0

 /* 
let angle = 0;
let train;

function preload() {
  train = loadModel('swoosh.obj');
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
*/
