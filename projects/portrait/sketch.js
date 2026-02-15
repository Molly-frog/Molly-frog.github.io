const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// HAIR PART TWO
ctx.fillStyle = "#442b1d";
ctx.beginPath();
ctx.fillRect(220,400,400,300);
ctx.fill();

ctx.fillStyle = "#A0B597";
ctx.beginPath();
ctx.fillRect(220,400,400,300);
ctx.fill();

// NECK
ctx.fillStyle = "#E5C59A";
ctx.beginPath();
ctx.fillRect(300,600,200,100);
ctx.fill();

// HEAD
ctx.fillStyle = "#ffdbac";
ctx.beginPath();
ctx.ellipse(
	400,400,  	//x,y of the center
	250,	 	//x radius
	200,	 	//y radius
	Math.PI/2,	//rotation
	0,	 	//start
	2*Math.PI	//stop
);
ctx.fill();

// HAIR
ctx.fillStyle = "#442b1d";
ctx.beginPath();
ctx.ellipse(
	500,230,  //x,y of the center
	150,	 //x radius
	75,	 //y radius
	Math.PI/4,	 //rotation
	0,	 //start
	2*Math.PI//stop
);
ctx.fill();

ctx.beginPath();
ctx.ellipse(
	300,230,  //x,y of the center
	150,	 //x radius
	75,	 //y radius
	Math.PI/-4,	 //rotation
	0,	 //start
	2*Math.PI//stop
);
ctx.fill();

ctx.beginPath();
ctx.fillRect(570,300,50,400);
ctx.fillRect(180,300,50,400);
ctx.fill();

// GLASSES
// Cirlcles Outside
ctx.fillStyle = "#39130A";
ctx.beginPath();
ctx.arc(510,430,100,0,2*Math.PI);
ctx.arc(290,430,100,0,2*Math.PI);
ctx.fill();

// Nose Bridge thing
ctx.fillStyle = "#39130A";
ctx.fillRect(375,415,50,30);

// Cirlces Inside
ctx.fillStyle = "#1b0c10";
ctx.beginPath();
ctx.arc(510,430,80,0,2*Math.PI);
ctx.arc(290,430,80,0,2*Math.PI);
ctx.fill();

// Glare
ctx.fillStyle = "#937F7A";
ctx.beginPath();
ctx.ellipse(
	290,475, 	//x,y of the center
	60,	 	//x radius
	20,		//y radius
	Math.PI,	//rotation
	0,	 	//start
	2*Math.PI	//stop
);
ctx.ellipse(
	510,475,	//x,y of the center
	60,	 	//x radius
	20,		//y radius
	Math.PI,	//rotation
	0,	 	//start
	2*Math.PI	//stop
);
ctx.fill();

// LIPS
ctx.fillStyle = "#f89589";
ctx.beginPath();
ctx.ellipse(
	400,565, 	//x,y of the center
	60,	 	//x radius
	20,		//y radius
	Math.PI,	//rotation
	Math.PI,	 	//start
	0	//stop
);
ctx.fill();

ctx.fillStyle = "#f89589";
ctx.beginPath();
ctx.ellipse(
	370,568, 	//x,y of the center
	30,	 	//x radius
	7,		//y radius
	2*Math.PI,	//rotation
	Math.PI,	//start
	Math.PI/6		//stop
);
ctx.fill();

ctx.fillStyle = "#f89589";//#f89589
ctx.beginPath();
ctx.ellipse(
	430,568, 	//x,y of the center
	30,	 	//x radius
	7,		//y radius
	2*Math.PI,	//rotation
	Math.PI,	//start
	0		//stop
);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#895049"
ctx.moveTo(400,570);
ctx.lineTo(460,565);
ctx.lineTo(460,569);
ctx.lineTo(400,570);
ctx.fill();

ctx.beginPath();
ctx.moveTo(460,565);
ctx.lineTo(485,570);
ctx.lineTo(460,569);
ctx.lineTo(460,565);
ctx.fill();

ctx.beginPath();
ctx.moveTo(400,570);
ctx.lineTo(340,565);
ctx.lineTo(340,569);
ctx.lineTo(400,570);
ctx.fill();

ctx.beginPath();
ctx.moveTo(340,565);
ctx.lineTo(315,570);
ctx.lineTo(340,569);
ctx.lineTo(340,565);
ctx.fill();

