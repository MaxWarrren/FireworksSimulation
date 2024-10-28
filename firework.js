class Firework {
    constructor(x, vel) {
      this.color = random(colors)
      this.firework = new Particle(x, height, true, this.color, vel);
      this.state = false; //this.state = false means firework has not exploded yet. 
      this.particles = [];
    }
  
    update() {
      if (!this.state) {
        this.firework.applyForce(gravity);
        this.firework.update();
        
        if (this.firework.vel.y >=random(0, 2)) { 
          this.state = true;
          this.explode();
        }
      }
  
      for (var i=0; i<this.particles.length; i++) {
        this.particles[i].applyForce(gravity);
        this.particles[i].update();
        if (this.particles[i].done()) {
          this.particles.splice(i, 1);
        }
      }
    }
  
    explode() {
      for (var i=0; i<30; i++) {
        var particle = new Particle(this.firework.pos.x, this.firework.pos.y, false, this.color, random(40, -40));
        this.particles.push(particle);
      }
    }
    
    done() {
      if(this.state && this.particles.length == 0) {
        return true;
      } else {
        return false;
      }
    }
  
    show() {
      if (!this.state) {
        this.firework.show();
      }
  
      for (var i=0; i<this.particles.length; i++) {
        this.particles[i].show();
      }
      
    }
  }