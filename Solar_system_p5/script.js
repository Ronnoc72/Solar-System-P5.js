let planets = [];
let size = 0;

function setup() {
	createCanvas(500, 500);
	for (let i = 0; i < 3; i++) {
		size = random(20, 30);
		planets[i] = new Planet(width / (i + 3), height / (i + 3), size, i);
	}
}

function draw() {
	background(20, 20, 40);
	fill(200, 230, 10);
	ellipse(width / 2, height / 2, 40, 40);
	translate(width / 2, height / 2);
	for (let i = 0; i < 3; i++) {
		planets[i].update();
		push();
		planets[i].getDist();
		pop();
		planets[i].show();
		push();
		planets[i].showMoon();
		pop();
	}
}
