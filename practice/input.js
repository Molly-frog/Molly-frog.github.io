const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

bluePlanetHow2Play = [
    "Oh No! Looks like the page is at",
    "the bottom of the ocean!!",
    "You need to go swim down there",
    "and get it...make sure to dodge",
    " the fishing rods!",
    " Or else you will get caught"
]
    
let startBackground = {
	center: {x: 700, y: 200},
	width: 400,
	height: 400,
    color: "#5dacbd"
}

let boats = {
    center: {x: 180, y: 50},
    width: 30,
    height: 220,
    color: "brown",
    flag: "black",
    radius: 100 
}

let startButton = {
	center: {x: 780, y: 500},
	height: 60,
	width: 255,
    color: "#e0ebeb"
}
let sky = {
    center: {x: 0, y:0},
    width: 1200,
    height: 300,
    color: "#e0ebeb"
}

let textIsScrolling = false;
let speed = -5;

function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

function drawHalfCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI);
    ctx.fill();
}

function write(x, y, text, size, color='white', align='left', font=mainFont) {
    ctx.textAlign = align;
    ctx.font = size + "px " + font;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
}

function drawBackground(color) {
    drawRect(0, 0, canvas.width, canvas.height, color);
}

function how2Play(){
    let y = startBackground.center.y + 40;
    let x = 785;

    drawRect(startBackground.center.x, startBackground.center.y, startBackground.width, startBackground.height, startBackground.color);
   
    write(x, y, "How To Play", 40, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 40, bluePlanetHow2Play[0], 20, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 80, bluePlanetHow2Play[1], 20, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 120, bluePlanetHow2Play[2], 20, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 160, bluePlanetHow2Play[3], 20, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 200, bluePlanetHow2Play[4], 20, color='#e0ebeb', 'left', font = "mainFont");
    write(x, y + 240, bluePlanetHow2Play[5], 20, color='#e0ebeb', 'left', font = "mainFont");

    drawRect(startButton.center.x, startButton.center.y, startButton.width, startButton.height, startButton.color);
    write(860, y + 300, "Start", 40, color="#5dacbd", align='left', font = "mainFont");
}

function clickHandler(e) {
    const mouseX = e.offsetX, mouseY = e.offsetY;

   let leftPosButton =   startButton.center.x;
   let rightPosButton =  startButton.center.x + startButton.width;
   let topPosButton =  startButton.center.y;
   let bottomPosButton = startButton.center.y + startButton.height;

    // console.log(leftPosBackground, rightPosBackground, '---', topPosBackground, bottomPosBackground)
    //console.log('mouse: ', mouseX, mouseY)

    if (leftPosButton < mouseX && mouseX < rightPosButton
        && topPosButton < mouseY && mouseY < bottomPosButton) {
        textIsScrolling = true;
    }
};

canvas.addEventListener('click', clickHandler);


function drawBoats(){
    drawHalfCircle(boats.center.x + 20, boats.center.y + 150, boats.radius, boats.color);
    drawRect(boats.center.x, boats.center.y, boats.width, boats.height, boats.color);
    drawRect(boats.center.x + 20, boats.center.y, boats.width + 70, boats.height - 150, boats.flag);

    drawHalfCircle(boats.center.x + 620, boats.center.y + 150, boats.radius, boats.color);
    drawRect(boats.center.x + 600, boats.center.y, boats.width, boats.height, boats.color);
    drawRect(boats.center.x + 620, boats.center.y, boats.width + 70, boats.height - 150, boats.flag);
}

function mainLoop(){
    drawBackground("#24527a");
    drawRect(sky.center.x, sky.center.y, sky.width, sky.height, sky.color);
    drawBoats();
    how2Play();


    if (textIsScrolling === true){
		startBackground.center.y = startBackground.center.y + speed;
        startButton.center.y = startButton.center.y + speed;
        sky.center.y = sky.center.y + speed;
        boats.center.y = boats.center.y + speed;
	}

	requestAnimationFrame(mainLoop);
}

mainLoop();