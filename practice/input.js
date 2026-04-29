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
    
    let starData = [];

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

function bubbles(){
    for (let i = 0; i < 100; i++) {
        starData.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height + 200),
            size: 1 + 2 * Math.random(),
        });
    }
}


function how2Play(){
    drawRect(700, 200, 400, 400, "#5dacbd");
    write(785, 250, "How To Play", 40, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 290, bluePlanetHow2Play[0], 20, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 330, bluePlanetHow2Play[1], 20, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 370, bluePlanetHow2Play[2], 20, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 410, bluePlanetHow2Play[3], 20, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 450, bluePlanetHow2Play[4], 20, color='#e0ebeb', align='left', font = "mainFont");
    write(785, 490, bluePlanetHow2Play[5], 20, color='#e0ebeb', align='left', font = "mainFont");

    drawRect(780, 500, 255, 60, "e0ebeb");
    write(860, 545, "Start", 40, color="#5dacbd", align='left', font = "mainFont");
}

function drawBoats(){
    drawHalfCircle(200, 200, 100, "brown");
    drawRect(180, 50, 30, 220, "brown");
    drawRect(200, 50, 100, 70, "black");

    drawHalfCircle(800, 200, 100, "brown");
    drawRect(780, 50, 30, 220, "brown");
    drawRect(800, 50, 100, 70, "black");
}

function drawCat() {
    let x = player.x;
    let y = player.y - 90;

    // head
    drawCircle(x, y-20, 35, "orange");

    // body
    drawCircle(x, y+40, 50, "orange");

    // ears
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.moveTo(x-35, y-45 +20);
    ctx.lineTo(x-20, y-75);
    ctx.lineTo(x-10, y-45);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x+10, y-45);
    ctx.lineTo(x+20, y-75);
    ctx.lineTo(x+35, y-45 +20);
    ctx.fill();

    // eyes
    drawCircle(x-15, y-20, 4, "black");
    drawCircle(x+15, y-20, 4, "black");

    // nose
    // drawCircle(x, y-5, 3, "black");

    // mouth
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.moveTo(x-5, y-10);
    ctx.lineTo(x,   y-15);
    ctx.lineTo(x+5, y-10);
    ctx.stroke();

    // reference point
    // drawRect(player.x-2, player.y-2, 4, 4, 'black');
}


drawBackground("#24527a");
drawRect(0, 0, 1200, 300, "white");
drawBoats();
how2Play();
bubbles();