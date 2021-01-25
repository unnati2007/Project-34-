class Ground {
  constructor(x, y, width, height) {
      var options = {
          isStatic:true,
          density:50
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y)
      rotate(angle);
      rectMode(CENTER);
      stroke("white")
      strokeWeight(2)
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
  }
}