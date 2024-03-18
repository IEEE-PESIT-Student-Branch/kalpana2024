# Illusionist
#### Author: Adithi H
#### Difficulty level: Medium
#### Points: 100

## Files Attached 
* [img.jpeg](/Illusionists/img.jpeg)

Step 1 - Use `Exiftool` on the image. 
You will find out that there is a file format error. 

Step 2 - Then you analyze the file hex header with https://hexed.it/ you will find out that the hex header is all 0s

Step 3 - Change that to PNG format hex header
>89 50 4E 47 0D 0A 1A 0A
and extension to `.png`

You get a proper image
![Ill](/z_images/ill.png)

`Flag - Kalpana2024{PNGesus}`