## Memes
#### Author: Jawahar Balachandher
#### Difficulty level: Hard
#### Points: 200

#### This is a coding question

**monsters.jpg** contains the problem statement

**kgf.jpeg** contains

**movie.jpeg** contains

**superhero.jpeg** contains

### Solution
Step-1: Apply exiftool on monsters.jpg

```bash
exiftool monsters.jpg
```
We can see "Passphrase: Nickname of kid in this movie (lowercase)" in the comment.
So, the passphrase is **boo**

Step-2: Use steghide and apply "boo" as the passphrase

```bash
steghide --extract -sf monsters.jpg
```
After extration, we can see question.txt:
We find that this content is encypted using Morse code:
.--- .- -- . ... / -... .-.-.- / ... ..- .-.. .-.. .. ...- .- -. / .. ... / - .- -.- .. -. --. / -.. .-. .. ...- .. -. --. / .-.. . ... ... --- -. ... / ..-. .-. --- -- / .... .. ... / .. -. ... - .-. ..- -.-. - --- .-. --..-- / -- .-. .-.-.- / -... .. -.- . / .-- .- --.. --- ..- ... -.- .. .-.-.- / -.. ..- .-. .. -. --. / - .-. .- .. -. .. -. --. --..-- / -- .-. .-.-.- / -... .. -.- . / - . .- -.-. .... . ... / .--- .- -- . ... / - --- / .- -.-. - .. ...- .- - . / - .... . / .-. .. --. .... - / .. -. -.. .. -.-. .- - --- .-. / .-.. .. --. .... - / .-- .... . -. / - ..- .-. -. .. -. --. / .-. .. --. .... - --..-- / - .... . / .-.. . ..-. - / .. -. -.. .. -.-. .- - --- .-. / .-.. .. --. .... - / .-- .... . -. / - ..- .-. -. .. -. --. / .-.. . ..-. - --..-- / .- -. -.. / - --- / ... .-- .. - -.-. .... / .. - / --- ..-. ..-. / .-- .... . -. / -.. .-. .. ...- .. -. --. / ... - .-. .- .. --. .... - .-.-.- / --. .. ...- . -. / - .... . / ... --- ..- .-. -.-. . / .- -. -.. / - .... . / -.. . ... - .. -. .- - .. --- -. / ...- . .-. - .. -.-. . ... / .-- .. - .... .. -. /
- .... . / -... .. -. .- .-. -.-- / - .-. . . / .--. .- - .... --..-- / ..-. .. -. -.. / - .... . / - --- - .- .-.. / -. ..- -- -... .
.-. / --- ..-. / - .. -- . ... / - .... . / .. -. -.. .. -.-. .- - --- .-. / .-.. .. --. .... - / .. -. / -... . .. -. --. / ... .-- .. - -.-. .... . -.. / --- -. .-.-.- / -. --- - . ---... / ----- / .-. . .--. .-. . ... . -. - ... / -. .. .-.. / -. --- -.. . ... / .- -. -.. / ... --- ..- .-. -.-. . / .- -. -.. / -.. . ... - .. -. .- - .. --- -. / ...- . .-. - .. -.-. . ... / .- .-. . / .--. --- ... .. - .. ...- . .-.. -.-- / -. ..- -- -... . .-. . -.. / .-- .. - .... .. -. / - .... . / - .-. . . / .--. .- - .... .-.-.-

After decrypting the morse code using https://www.dcode.fr/morse-code we get the problem statement:

JAMES B. SULLIVAN IS TAKING DRIVING LESSONS FROM HIS INSTRUCTOR, MR. BIKE WAZOUSKI. DURING TRAINING, MR. BIKE TEACHES JAMES TO ACTIVATE THE RIGHT INDICATOR LIGHT WHEN TURNING RIGHT, THE LEFT INDICATOR LIGHT WHEN TURNING LEFT, AND TO SWITCH IT OFF WHEN DRIVING STRAIGHT. GIVEN THE SOURCE AND THE DESTINATION VERTICES WITHINTHE BINARY TREE PATH, FIND THE TOTAL NUMBF OF TIMES THE INDICATOR LIGHT IN BEING SWITCHED ON. NOTE: 0 REPRESENTS NIL NODES AND SOURCE AND DESTINATION VERTICES ARE POSITIVELY NUMBERED WITHIN THE TREE PATH.

Step-3: Apply exiftool on kgf.jpeg

```bash
exiftool kgf.jpeg
```
We can see "Passphrase: Full name of Yash (lowercase & space is replaced with underscore(_) )" in the comment.
So, the passphrase is **naveen_kumar_gowda**

Step-4: Use steghide and apply "naveen_kumar_gowda" as the passphrase

```bash
steghide --extract -sf kgf.jpeg
```
We can find a file called constraints.txt file, that contains the constraints for the problem statement.

0b01100011 0b01101111 0b01101110 0b01110011 0b01110100 0b01110010 0b01100001 0b01101001 0b01101110 0b01110100 0b01110011 0b00111010 0b00100000 0b00001010 0b00110001 0b00111100 0b00111101 0b01101110 0b00111100 0b00111101 0b00110001 0b00110000 0b00110000 0b00001010 0b01110011 0b01101111 0b01110101 0b01110010 0b01100011 0b01100101 0b01011111 0b01110110 0b01100101 0b01110010 0b01110100 0b01100101 0b01111000 0b00100000 0b00111110 0b00100000 0b00110000 0b00001010 0b01100100 0b01100101 0b01110011 0b01110100 0b01101001 0b01101110 0b01100001 0b01110100 0b01101001 0b01101111 0b01101110 0b01011111 0b01110110 0b01100101 0b01110010 0b01110100 0b01100101 0b01111000 0b00100000 0b00111110 0b00100000 0b00110000

The content inside this text file is in binary format.

Using https://www.rapidtables.com/convert/number/binary-to-ascii.html to convert to text:

constraints: 

1<=n<=100

source_vertex > 0

destination_vertex > 0

Step-5: Apply exiftool on movie.jpeg

```bash
exiftool movie.jpeg
```
We can see "Passphrase: Name of movie (lowercase)" in the comment.
So, the passphrase is **minions**

Step-6: Use steghide and apply "minions" as the passphrase

```bash
steghide --extract -sf movie.jpeg
```
We can find a file called output_format.txt file, that contains the output format for the problem statement.

0x6F 0x75 0x74 0x70 0x75 0x74 0x20 0x66 0x6F 0x72 0x6D 0x61 0x74 0x3A 0x0A 0x6E 0x75 0x6D 0x62 0x65 0x72 0x5F 0x6F 0x66 0x5F 0x74 0x75
0x72 0x6E 0x73 0x5F 0x6D 0x61 0x64 0x65

The content inside this text file is in hex format.

Using https://www.rapidtables.com/convert/number/hex-to-ascii.html to convert to text:

output format:

number_of_turns_made

Step-7: Apply exiftool on superhero.jpeg

```bash
exiftool superhero.jpeg
```
We can see "Passphrase: Name of superhero (lowercase)" in the comment.
So, the passphrase is **he-man**

Step-8: Use steghide and apply "he-man" as the passphrase

```bash
steghide --extract -sf superhero.jpeg
```
We can find a file called input_format.txt file, that contains the input format for the problem statement.

The content inside this text file has an hint to the encrypted text:

:?AFE 7@C>2Ei
? ^^ ?F>36C @7 ?@56D
2CC2J @7 ? ?@?\?682E:G6 :?E686CD
D@FC460G6CE6I 56DE:?2E:@?0G6CE6I


Hint: there are 47 ROTten eggs.

So, now decrypt the content using ROT47 as given by the hint which is present in this input_format.txt file.

input format:

n // number of nodes

array of n non-negative integers

source_vertex destination_vertex

Short description about the given sample input and output

For the binary tree: 
               1

            /    \

           2       3

          / \     / \

         4   5   6   7

        / \ / \ / \ 

        8 0 0 0 9 10

turnings/indicator on in vertices 2,1,3,6

so output = 4 turnings in total so his indicator is switched on 4 times

Time Complexity: O(n)

Space Complexity: O(1)

After finding the problem statement, input format, output format and contraints ;solve this coding challenge. You can find the solution/code to this challenge in soln.c file.
