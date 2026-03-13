let gameActive = true;
let hasHat = false;

function gameOver(){
	gameActive = false;
	if (gameActive == false){
		clear();
		start();
	}
}

function talk() {
	clear();
	print("Would you like to go fishing with me? He asks It's no fun " +
		"without company. Type: Yes or No");

	function processInput(input){
		if (input.toLowerCase() === "no") {
			print("Thinking no harm...wait you said no? Oh uh..." +
				" I mean harm could come " + 
				"from it even though you are a fisher. " + 
				"You say no. " +
				"\n**Silience**" + "\nOkayyy he says as you " +
				"stand there akwardly....");
			print("\nWould you like leave? Type: Yes or Yes");

			function processInput(input){
				if (input.toLowerCase() === "yes") {
					clear();
					explore();
				} else {
					print("There was only option why are " +
						"you still here????");
				}
			} 
			waitForInput(processInput);
		} else if (input.toLowerCase() === "yes") {
			print("\nThinking no harm could come from it, you join " + 
			"Usopp on his quest for dinner. After another small " + 
			"tug, you pull in your line, but to no avail. Almost " + 
			"giving up, you lower your line again, but just then " +
			"a heavy weight pulls at your fishing pole. ");

			print("\nIve got something! You shout excitedly, Usopp " + 
			"cheering you on. However, your excitement quickly " +
			"turns to dread as the weight threatens to pull you overboard.");

			print("\nHelp you shout as Usopp grabs you by the " + 
			"shirt, keeping you from swan-diving into the ocean. " +
			"Using the last of your strength, you yank the line " +
			"out of the water, the fishing pole snapping in half " +
			"as a result. When the struggle finally ends, you hold " +
			"up your spoils of war. It’s a single minnow.");
			
			print("\nMaybe you should hit the gym some more dude, " +
			"that was pathetic… Usopp suggests with a blank stare.");

			print("\nWould you like to throw yourself overboard to " + 
				"spare yourself the humiliation Or act like it " +
				"never happened?" + 
				"\n\tRestart" +
				"\n\tThrow yourself overbaord(Type: overbaord)");

			function processInput(input){
        			if (input.toLowerCase() === "restart") {
					gameOver();
				} else if (input.toLowerCase() === "overbaord") {
					print("Ending: Sharks and Minows");
				} else {
					stayHere();
					waitThenCall(usopp);
				}
			} 
			waitForInput(processInput);
		} else {
			stayHere();
			waitThenCall(ussop);
		}
		waitForInput(processInput);
	}
	waitForInput(processInput);
}

function deck() {
    clear();
    print("\nYou are on the deck! As you look up at the bright sky you see" + 
    " 4 places that the hat could be!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tKitchen" + 
    	"\n\tGym" +
    	"\n\tContinue exploring Deck (Type: Explore)" +
    	"\n\tCabin (dont go here)");
    
    function processInput(input){
        if (input.toLowerCase() === "kitchen") {
		kitchen();
        } else if (input.toLowerCase() == "gym") {
		gym();
	} else if (input.toLowerCase() == "explore") {
		explore();
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
	print("\nIt smells like Sanji is cooking something yummy! He turns" + 
		" to greet you as you approach, the savory smell of fresh " + 
		"reindeer filling the air as you meet his gaze."); 

	if (hasHat == false){
		print("\nWasting no time, you ask if he has seen Luffy's " + 
			"hat. He pauses, considering for a moment. \n" +
			"Sorry, I havent seen it around. Have you searched " +
			"the rest of the ship? I'd be happy to look in " + 
			"Nami's room with you...");

		print("\nWell, that was... oddly specefic. Though, now that" +
			"though now that you think about it, there's a " + 
			"chance the hat is with Nami.");

		print("\n\n");

    		print("\nWhere do you want to go next? Say one of these choices:" +
    			"\n\tDeck" + 
			"\n\tNami's Room");


    		function processInput(input){
        		if (input.toLowerCase() === "deck") {
           	 		deck();
    	   	 	} else if (input.toLowerCase() == "nami's room"){
    	        		namiRoom();
			} else{
				stayHere();
    	        		waitThenCall(kitchen);
    	   	 	}

		}
    	} else {
		print("He doesnt bother to look up, instead asking you if Ussop" +
			"had finished fishing for dinner. You decide it isnt " +
			"worth talking to him and leave." +
			"\n\tGo back to the Deck?");
	
    		function processInput(input){
        		if (input.toLowerCase() === "deck") {
           	 		deck();
			} else{
				stayHere();
    	        		waitThenCall(kitchen);
    	   	 	}
		}
	}
	waitForInput(processInput);
}

function namiRoom() {
	clear();
	print("\nYou make your way to Nami's room, upon entering you " + 
		"immediately regret all life decisions!");
	print("\nWho are you? the woman practically hisses. You try to " +
		"speak but before you are able to finish your sentence " +
		"she drags you over the edge of the ship!!");

	print("\nCongratulations! You've been thrown over board, wow your " +
		"weak, you need to work out or something man....");

	print("\nEnding: With the fishes... would you like to restart?" + 
		" yes or no");
    
    	function processInput(input){
        	if (input.toLowerCase() === "yes") {
			gameOver();
		} else if (input.toLowerCase() == "no") {
			print("Okay well drowning is no fun so just go back");
		}
    	}
	waitForInput(processInput);
}

function gym() {
	clear();
	print("\nYou are in the Gym!");
	print("\n");


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

function explore() {
	clear();
	print("\nAs you continue to explore the deck, you see a manlike " +
		"figure in the distance. Its Ussop! It seems like you've " +
		"interupted his fishing, yet he " +
		"still waves you over.");

    	print("\nWhat do you want to do next? Say one of these choices:" +
        	"\n\tWheel" +
		"\n\tTalk to Usopp (Type: Usopp)" +
		"\n\tDeck" + 
		"\n\tNami's Room");
    
    	function processInput(input){
        	if (input.toLowerCase() === "wheel") {
			wheel();
		} else if (input.toLowerCase() === "deck") {
			deck();
		} else if (input.toLowerCase() === "nami's room") {
			namiRoom();
		} else if (input.toLowerCase() === "usopp") {
			talk();
		}else {
    	        	stayHere();
    	        	waitThenCall(explore);
    	    	}
    	}
	waitForInput(processInput);
}

function wheel() {
	clear();
	print("\nYou are in at the helm of the boat!");
	print("\nOhhhh look its the ships wheel....");
	
	print("Would you like to go try and steer the ship???? Or go back?" + 
		"\n\tExplore the deck again?" + 
		"\n\tSteer the wheel (Type: Steer)");

    	function processInput(input){
        	if (input.toLowerCase() === "explore") {
			explore();
		} else if (input.toLowerCase() === "steer") {
			print("The steering wheel calls to you like a beacon " +
			"in the night. It's decided, you must steer the ship. " +
			"Taking hold of the wheel, you find steering much easier " +
			"than you once thought. 30 seconds in and all is going " +
			"smoothly---is that an iceberg??? The ship crashes, " +
			"and you are killed in the collision.");
			print("\nEnding: Titanic\nWould you like to restart?" +
			" Type: Yes or No");
			
			function processInput(input){
        			if (input.toLowerCase() === "yes") {
					clear();
					gameOver();
				} else if (input.toLowerCase() === "no") {
					print("You sure??");
				} else {
					stayHere();
				}
			} 
			waitForInput(processInput);
    		} else {
		stayHere();
		}
	}
	//waitForInput(processInput);
}

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
		        waitThenCall(context);
        	}
	}
    
	waitForInput(processInput);
}
