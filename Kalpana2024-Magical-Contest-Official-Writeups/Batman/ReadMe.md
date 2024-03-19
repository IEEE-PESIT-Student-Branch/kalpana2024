## BATMAN
#### Author: K R Druva
#### Difficulty Level : HARD
#### Points : 200 points

SOLUTION:-kalpana{batman_comes_home}

In the batman.txt,we find   out the password for RATAtoullieALAbamaDAd1.pdf which is the main villian of  Batman Returns[THE_PENGUIN].

Now in RATAtoullieALAbamaDAd1.pdf we use one cipher for encyption and decrpytion[RATAALADA],on decrpytion using this link[https://www.dcode.fr/rata-alada-cipher] ,we end up with [CARMINE_FALCONE] as the password for extracting the files present in the image.
we could now use Steghide to extract all the files present in the image.


Now for accessing the files present in the image we have to provide the name of the character present in the image[DEADSHOT]and use gpg decrpytion.


Now after extracting the contents of the file,we figure out that there is nothing in the file ,this is because we have used WHITESPACE cipher .


Now on uploading the textual file into this link[https://www.dcode.fr/whitespace-language],
we end up with the Solution[kalpana{batman_comes_home}] of this particular Question.
