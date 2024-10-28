class Particle {
    constructor(x, y, type, color, vel) {
      this.lifespan = 1;
      this.color = color;
      this.pos = createVector(x, y);
      if (type) { //if type is true particle is the parent particle
        this.vel = createVector(random(-1, 1), vel);
        
      } else {
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(random(1, 4), random(5, 8)));
      }
      
      this.acc = createVector(0, 0);
      this.parent = type;
      
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      if (!this.parent) {
        //this.vel.mult(.9);
        this.lifespan -= random(0.025, 0.050);
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    done() {
      if (this.lifespan < 0) {
        return true;
      } else {
        return false;
      }
    }
  
    show() {
      if (this.parent) {
        stroke("rgba(" + this.color + ", 1)");
        strokeWeight(4);
        
      } else {
        stroke("rgba(" + this.color + ", " + this.lifespan + ")");
        strokeWeight(3);
      }
      point(this.pos.x, this.pos.y);
    }
  }