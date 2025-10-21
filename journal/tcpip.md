# The TCP/IP Model

## Application

Application is broken into 2 halves:

1. Server 
	* On desktop comp.
	* Waits for network connection
2. Client
	* Runs on source comp.

Protocols in this layer include: 
 
* www
* SMS/RCS
* Email
* VOIP
* IRC

## Transport

Packet has:

* Where the packet fits
* Length
* Destination adress
* Source adress

Destination comp.: 

* Gives acknoledgements to indicate how much it recieved/
reconstructed
	* Depending on how fast the ack. comes, the comp will make the window
	smaller/bigger

Protocols in this layer include:

* TCP
* UDP

## Internet

* First link of the packet = Router
* Router diceides where to go

Packet has:

* Source Adress
* Destination Adress

Protocols in this layer include:

* Routing
* IP

## Link (Network Access)

* Responsible for connecting your comp. to its local network and moving data
across a single hop
* Most common link layer is wireless networking
* They break up large pakets into smaller bits 
* Then Send them individually
* Each comp. will send a bit of the packet then wait for other computers

Protocols in this layer include:

* Wifi
* Ethernet
* LTE
* Bluethooth
