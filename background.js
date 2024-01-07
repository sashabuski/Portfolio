// sketch.js
const friction = 0.65;
const resiliency = -0.025;
const mousePower = 0.07;
const blockSize = 60;
let main = [];
let rows = [];
let columns = [];
var canvas;
function setup() {
  canvas = createCanvas(2000, 2000);
canvas.position(-40,-40);
  canvas.style('z-index', '-1');
 
  [main, columns, rows] = makeGrid();
}

function draw() {
  background(239,239,239);

  // Call burst function continuously based on mouse movement
  burst();

  main.forEach((elem) => {
    elem.update();
  });

  // Set the color of the grid to #1A2EFF
  stroke(26, 46, 255, 55);
  noFill();

  rows.forEach((arr) => {
    beginShape();
    arr.forEach((elem) => {
      curveVertex(elem.pos.x, elem.pos.y);
    });
    endShape();
  });

  columns.forEach((arr) => {
    beginShape();
    arr.forEach((elem) => {
      curveVertex(elem.pos.x, elem.pos.y);
    });
    endShape();
  });
}

function burst() {
  let mouse = createVector(mouseX, mouseY);
  main.forEach((elem) => {
    let diff = elem.pos.copy().sub(mouse);
    let distance = diff.mag();
    let multi = pow(2, -(distance * mousePower));
    f = diff.mult(multi);
    elem.acc.add(f);
  });
}

function makeGrid() {
  let arr = [];
  for (let i = 0; i < width; i += blockSize) {
    for (let j = 0; j < height; j += blockSize) {
      arr.push(new Point(i, j));
    }
  }

  let columns = [];
  for (let i = 0; i < width; i += blockSize) {
    const column = arr.filter((elem) => elem.supposed.x == i);
    columns.push(column);
  }

  let rows = [];
  for (let j = 0; j < height; j += blockSize) {
    const row = arr.filter((elem) => elem.supposed.y == j);
    rows.push(row);
  }
  return [arr, columns, rows];
}

function Point(x, y) {
  this.supposed = createVector(x, y);
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.update = () => {
    this.seek(this.supposed);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.mult(friction);
    this.acc.mult(0); //clear acc
  };

  this.seek = (target) => {
    let diff = this.pos.copy().sub(target);
    let distance = diff.mag();
    let f = diff.mult(distance).mult(resiliency);
    this.acc.add(f);
  };
}
