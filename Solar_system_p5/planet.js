function Planet(x, y, scl, angle) {
	this.x = x;
	this.y = y;
	this.scl = scl;
	this.angle = angle;
	this.rotationSpeed = 0;
	this.rotationSpeed2 = 0;
	this.ranIncr = random(0.001, 0.004);
	this.color = random(0, 255);
	this.color2 = random(0, 255);
	this.color3 = random(0, 255);
	this.moonSize = random(6, 8);
	this.dist = random(6, 8);
	this.ring = dist(0, 0, this.x, this.y) * 2;

	this.show = function() {
		noStroke();
		fill(this.color,this.color2, this.color3);
		ellipse(this.x, this.y, this.scl);
	}

	this.update = function() {
		this.angle += this.ranIncr;
		rotate(this.angle);
	}

	this.showMoon = function() {
		this.rotationSpeed -= 0.02;
		translate(this.x, this.y);
		fill(200);
		noStroke();
		rotate(this.rotationSpeed);
		ellipse(this.x / this.dist, this.y / this.dist, this.moonSize);
	}

	this.getDist = function() {
		stroke(255);
		noFill();
		ellipse(0, 0, this.ring);
	}
}
