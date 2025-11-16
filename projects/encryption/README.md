
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key: 4
My Partner's Key: 6

Our initial shared key: 10

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| Dbecd dro Nemu | Trust the Duck  | 10 |
| Ls jpd, Ofnv vyzhd lww | Ah yes, duck knows all | 11 |
| Ct qcifgs, tcf Riqy wg cif zsorsf | Of course, for he is our leader | 14 |
| Yrq xipl qorpq qeb cold? | But what about the frog? | 23 |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. 
By the time the message leaves the application layer, it is encoded in binary. 
We've been working with text for this activity for convenience, but let's see 
what the binary looks like.

Go back to the first encrypted message that you sent (it should be in 
`rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. 
But we know that the real message is in binary.

Select the first six characters from this message and copy them here:frtiRB

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 01100110 01110010 
01110100 01101001 01010010 01000010

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information 
below with the binary values you computed above.

    =========
    Packet 1:

    Source: [Molly]
    Destination: [Mr. Chris]  
    Sequence: 1/3
    Data: [01100110] [01110010]
    =========
    Packet 2:

    Source: [Molly]
    Destination: [Mr. Chris]
    Sequence: 2/3 
    Data: [01110100] [01101001]
    =========
    Packet 3:

    Source: [Molly]
    Destination: [Mr. Chris]
    Sequence: 3/3
    Data: [01010010] [01000010]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What 
purpose did each serve in this simulation?
Symmetric: Has one shared key that is for encrypting and decrypting, its fast 
and used for large amounts of data.
Asymmetric: Has 2 keys, public and private. Its is slow but solves key exchange
problem.
How it is used: The symmetric encryption was represented by the Caesar Cipher 
Wheel while the key that I had, which was a 4 and my partner who had a 6 
represented asymmetric encryption 

- Why is it important that this protocol uses a new key for each message?
It is important that you use new keys for each message because if someone manages
to discover one key they can only dycrpt that one message. However if you used
the same key for every message the whole conversation would be leaked. 

- Why is it important that you never share your secret key?
Because the whole symmetric system relies on that key being a secret. If someone
gets that key then they can automatically decrypt any messages that are to or 
from you.

- In the transport layer, do these messages use TCP or UDP? Why?
TCP because it is very reliable, as your message will be delivered in order and 
error free. For a message that is very important. 

- Now that you've created packets in the transport layer, give a short 
explanation of what happens to these packets in the internet layer and in the 
link layer.
In the Internet Layer it takes the packet from the Transport Layer and adds a 
header, then using routing tables to find the best path to send the packet 
towards its destination. In the Link Layer takes the packet and a header and 
converts it into the physical signals like Ethernet to be able to transmit it 
across the actual network.

- This protocol successfully encrypts the **content** of the message. Even 
though and adversary in the middle can't read the content of the message, what 
other information can they still see?

Basically the who what when where and how but not at all like that

Who: Who is communicating 
When: When they are communicating 
How: How much is being communicated and how often


