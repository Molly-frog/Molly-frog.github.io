const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

let vx = 1;
let vy = 2;
let gravity = 1;

function animate(){
	ctx.clearRect(0,0,800,800);
	
	ctx.fillRect(x,y,50,50);
	requestAnimationFrame(animate);
}

animate();



//event handler
function handleKeyDown(e){
	e.preventDefault();
	if (e.key === "ArrowDown"){
		y = y + vy;
	} else if (e.key === "ArrowUp") {
		y = y - vy
	} else if (e.key === "ArrowRight") {
		x = x + vx
	} else if (e.key === "ArrowLeft") {
		x = x - vx
	}

}

//event listener
document.addEventListener('keydown', handleKeyDown);
	
