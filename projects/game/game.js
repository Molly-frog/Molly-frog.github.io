let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.
let hasHat = false;

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function deck() {
    clear();
    print("\nYou are on the deck! As you look up at the bright sky you see" + 
    " 4 places that the hat could be!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tKitchen" + 
    	"\n\tGym" +
    	"\n\tFish" +
    	"\n\tCabin (dont go here)");
    
    function processInput(input){
        if (input.toLowerCase() === "kitchen") {
		kitchen();
        } else if (input.toLowerCase() == "gym") {
		gym();
	} else if (input.toLowerCase() == "fish") {
		fish();
	} else if (input.toLowerCase() == "cabin") {
		context();
	} else {
		stayHere();
		waitThenCall(deck);
        }
    }
    waitForInput(processInput);
}

function kitchen() {
    clear();
    print("\nYou are in the Kitchen!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
	let myTitle = `
 _    _  ___   _   _ _____ ___________                                    
| |  | |/ _ \\ | \\ | |_   _|  ___|  _  \\                                   
| |  | / /_\\ \\|  \\| | | | | |__ | | | |                                   
| |/\\| |  _  || . \` | | | |  __|| | | |                                   
\\  /\\  / | | || |\\  | | | | |___| |/ /
 \\/  \\/\\_| |_/\\_| \\_/ \\_/ \\____/|___/
                                                                          
                                                                          
 _____ _   _  _____   _____ ___________  ___  _    _    _   _   ___ _____ 
|_   _| | | ||  ___| /  ___|_   _| ___ \\/ _ \\| |  | |  | | | | / _ \\_   _|
  | | | |_| || |__   \\ \`--.  | | | |_/ / /_\\ \\ |  | |  | |_| |/ /_\\ \\| |
  | | |  _  ||  __|   \`--. \\ | | |    /|  _  | |/\\| |  |  _  ||  _  || |  
  | | | | | || |___  /\\__/ / | | | |\\ \\| | | \\  /\\  /  | | | || | | || |
  \\_/ \\_| |_/\\____/  \\____/  \\_/ \\_| \\_\\_| |_/\\/  \\/   \\_| |_/\\_| |_/\\_/  
	`;

	printAscii(myTitle, "#a32222");
	print("\n\n\n");
	let start = " Start "
	print("Type Start to continue!!");

    function processInput(input){
        if (input.toLowerCase() === "start") {
            context();
        } else {
            stayHere();
        }
    }
    waitForInput(processInput);
}

function context(){
	clear();

	if (hasHat == false){
		print("\n");
		print("You are a fisherman, one day, while sitting on your" + 
		"tiny boat getting ready to go back to you tiny island," + 
		" a biggg storm hits your waters. You try to stay afloat" + 
		" but ... OHH NOOO... the storm is bigger than you had " + 
		"expected and you go over board...");
		
		print("\n");

		print("You wake up in a daze. It appears that you have " + 
		"woken up on the Thousand Sunny, the ship of the infamous " + 
		"Straw Hat Pirates. After waking up in the ship's cabin, you " +
		"informally meet Captain Monkey D. Luffy, who is sleeping, " + 
		"but it appears that he is trying to say something......?");

		print("\n");

		print("heEyyy youuuuUuuu! Give MEEee bAAck my Hat! Are YOU " + 
		"tryin’ to STArttt a fighttt…. SNOOORRRREEEEE");

		print("\n");

		print("GASP…..he saved your life, but he’s lost his most " + 
		"precious treasure: his Straw Hat. To repay " + 
		"his kindness, you decide to search the ship and find his " + 
		"missing hat!!");

		print("Type Deck to start your journey");
	} else{
		print("idk if this works yayayaayyay");
	}
	function processInput(input){
		if (input.toLowerCase() === "deck") {
			deck()
		} else {
			stayHere();
		        waitThenCall(start);
        	}
	}
    
	waitForInput(processInput);
}
