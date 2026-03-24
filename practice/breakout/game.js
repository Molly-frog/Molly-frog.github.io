const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



const ballRadius = 10;
let x = 480 / 2;
let y = 320 - 30;
let dx = 2;
let dy = -2;


const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
//let paddleSpeed = 8;
//let paddleCillisionGenerosity = 7;

let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);


function keyDownHandler(e) {
	if (e.code === "ArrowRight") {
		rightPressed = true;
	} else if (e.code === "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if (e.code === "ArrowRight") {
		rightPressed = false;
	} else if (e.key === "ArrowLeft") {
		leftPressed = false;
  }
}

function drawBall() {
	ctx.fillStyle = "purple";
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
	ctx.fill();
}

function drawPaddle() {
	ctz.fillStyle = "purple";
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
	ctx.fill();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	drawBall();
	drawPaddle();
	
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}

	if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 7;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 7;
	}

	x += dx;
	y += dy;
}

function startGame() {
  setInterval(draw, 10);
}


const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});

