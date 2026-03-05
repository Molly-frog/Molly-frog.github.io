"use strict";

function addToBody(text){                                                  
    document.body.innerHTML += "<p>" + text + "</p>";
}

let yourName = prompt("What is your name?");

addToBody("Hi " + yourName);

let tempt = prompt("What is the temperature outside?");

tempt = Number(tempt);

if(tempt <= 32){
	addToBody("Its freezing! Stay Inside!!!");
}else if(tempt >= 80) {
	addToBody("Go to the Beach");
}else{
	addToBody("Dig Your Own Grave!");
}
