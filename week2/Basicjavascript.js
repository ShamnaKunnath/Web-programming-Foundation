// write your code here
//simple javascript programme to test and undertsand var,methods and functions
var img=new SimpleImage("chapel.png");
print(img.getPixel(0,0));
print(img.getWidth());
print(img.getRed(0,0));
print(img);

function square(x){
    return x*x;
}
 print(square(4));
 
 //simple programe to create a image with 200 pixel height and width with yellow colour(r=255,g=255,b=0).
var image=new SimpleImage(200,200);
print(image);
for (var pixel of image.values()){
    pixel.setBlue(0);
    pixel.setGreen(255);
    pixel.setRed(255);
}
print(image);

//simple programe to create a image with 200 pixel height and width with magentha colour(r=255,g=0,b=255).

for (var pixel of image.values()){
    pixel.setBlue(255);
    pixel.setGreen(0);
    pixel.setRed(255);
}
print(image);

// Write a JavaScript program that modifies an image by putting three vertical stripes on it - a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the right one third. For example, if your program ran on Drew’s picture shown on the left, the resulting image would have red, green and blue vertical stripes as shown in the image on the right.

var img1=new SimpleImage("hilton.jpg");
var width=img1.getWidth();
for (var pixel of img1.values()){
    if (pixel.getX()<(width/3)){
        pixel.setRed(255);
    }
    else{
        if(pixel.getX()<(2*width)/3){
            pixel.setGreen(255);
        }
        else{
            pixel.setBlue(255);
        }
    }
}
print(img1);

// write your code here
var x = 3;
print("x");
//part2 

function swapRedGreen(pixel){
    var x=pixel.getRed();
    pixel.setRed(pixel.getGreen());
    pixel.setGreen(x);
}

//testing swapRedGreen

img2=new SimpleImage("usain.jpg");
print(img2);
for(var pixel of img2.values()){
    swapRedGreen(pixel);
}
print(img2);

//Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right)

img3=new SimpleImage("duke_blue_devil.png");
print(img3);
for(var pixel of img3.values()){
    if(pixel.getRed()==0){
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}
print(img3);
