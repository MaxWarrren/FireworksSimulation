console.log("F I R E W O R K S");
console.log('');
console.log("I would recommend opening in a new tab for a better experience");
console.log('');
console.log("Shift + Left Mouse to shoot a firework");
console.log('');
console.log("Press E to toggle auto fireworks");


var font, points, amount;
var fireworks = [];
var gravity, cnv;
var fire = true;
var auto = true;
var colors = ['217, 33, 33', '33, 76, 217', '0, 189, 69', '116, 18, 227', '255, 136, 0'];
var debug = true;


function setup() {
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  
  gravity = createVector(0, 0.2);


}

function draw() {
  background(0, 50);
 
  for (var i=0; i<fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  

  if (auto) {
    if (random(1) <.025) {
      fireworks.push(new Firework(random(width), random(-10, -20)));
    }
  }

  if (keyIsDown(SHIFT) && mouseIsPressed) {
    if (fire) {
      shoot();
    }
  }
  
  if (keyIsDown(SHIFT) && mouseIsPressed) {
    setTimeout(function() {
      fire = false;
    }, 5);
  } else {
    fire = true;
  }
}

function shoot() {
  fireworks.push(new Firework(mouseX, map(mouseY, 0, height, -10, -20)*random(0.95, 1.01)));
}

function keyPressed() {
  if (keyCode === 69) {
    auto = !auto;
  }
}