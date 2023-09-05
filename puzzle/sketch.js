class Color {
  constructor(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
}

var state = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var posX = [200, 100, 200, 300, 600, 700, 600, 500, 100, 600, 700];
var posY = [200, 300, 400, 300, 200, 300, 400, 300, 200, 100, 200];

var sym = "ABCDEFGHXYZ";
function init() {
  for (let i = 0; i < 11; i++) {
    state[i] = i;
  }
}

function moveA() {
  var temp0 = state[0];
  state[0] = state[3];
  state[3] = state[2];
  state[2] = state[1];
  state[1] = temp0;
  var temp7 = state[7];
  state[7] = state[6];
  state[6] = state[5];
  state[5] = state[4];
  state[4] = temp7;
}

function moveB() {
  var temp3 = state[3];
  state[3] = state[7];
  state[7] = temp3;
  var temp1 = state[1];
  state[1] = state[8];
  state[8] = temp1;
  var temp4 = state[4];
  state[4] = state[9];
  state[9] = temp4;
  var temp5 = state[5];
  state[5] = state[10];
  state[10] = temp5;
}

function setup() {
  createCanvas(800, 610);
  init();
}

function draw() {
  background(220);
  r = new Color(255, 0, 0, 255);
  b = new Color(0, 0, 255, 255);
  lines(0, 1, r, 8);
  lines(1, 2, r, 8);
  lines(2, 3, r, 8);
  lines(3, 0, r, 8);
  lines(4, 5, r, 8);
  lines(5, 6, r, 8);
  lines(6, 7, r, 8);
  lines(7, 4, r, 8);
  lines(1, 8, b, 8);
  lines(3, 7, b, 8);
  lines(4, 9, b, 8);
  lines(5, 10, b, 8);

  fill(255);
  strokeWeight(3);
  stroke(0);
  for (let i = 0; i < 11; i++) {
    circle(posX[i], posY[i], 50);
  }
  fill(0);
  strokeWeight(0);
  textSize(40);
  for (let i = 0; i < 11; i++) {
    text(sym[state[i]], posX[i] - 15, posY[i] + 15);
  }
  strokeWeight(5);
  fill(255, 0, 0);
  rect(100, 500, 200, 100);
  fill(0, 0, 255);
  rect(500, 500, 200, 100);
  fill(255, 255, 255);
  rect(300, 500, 200, 100);
  fill(255, 255, 0);
  rect(100, 10, 200, 100);
}
function mousePressed() {
  if (mouseX > 100 && mouseX < 300 && mouseY > 500 && mouseY < 600) {
    if (mouseIsPressed) {
      moveA();
    }
  }
  if (mouseX > 500 && mouseX < 700 && mouseY > 500 && mouseY < 600) {
    if (mouseIsPressed) {
      moveB();
    }
  }
  if (mouseX > 100 && mouseX < 300 && mouseY > 10 && mouseY < 110) {
    if (mouseIsPressed) {
      scramble();
    }
  }
  if (mouseX > 300 && mouseX < 500 && mouseY > 500 && mouseY < 600) {
    if (mouseIsPressed) {
      reset();
    }
  }
}
function scramble() {
  for (let i = 0; i < 10000; i++) {
    k = getRandomInt(0, 4);
    if (k == 0) {
      moveA();
    }
    if (k == 1) {
      moveA();
      moveA();
    }
    if (k == 2) {
      moveA();
      moveA();
      moveA();
    }
    if (k == 3) {
      moveB();
    }
  }
}
function reset() {
  init();
}
function lines(x, y, c, w) {
  stroke(c.r, c.g, c.b, c.a);
  strokeWeight(w);
  line(posX[x], posY[x], posX[y], posY[y]);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
