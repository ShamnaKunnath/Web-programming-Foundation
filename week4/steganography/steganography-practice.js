// write your code here
function clearbit(clrvalue){
    //compute the same clr with lower bit zeroed
    var clr= Math.floor(clrvalue/16)*16;
    return clr;
}

function chop2hide(image){
    //for each pixel in the image
    for(var px of image.values()){
    
        //clear the low bits of red
        px.setRed(clearbit(px.getRed()));
        //clear the low bits of green
        px.setGreen(clearbit(px.getGreen()));        
        //clear the low bits of blue
        px.setBlue(clearbit(px.getBlue()));
    }
    
    //after doing each pixel return the image as the answer
    return image;
}

function shift(image){
for(var px of image.values()){
    px.setRed(Math.floor(px.getRed()/16));
    px.setGreen(Math.floor(px.getGreen()/16));
    px.setBlue(Math.floor(px.getBlue()/16));
}
return image;
}

function combine(show,hide) {
var ans=new SimpleImage(show.getWidth() , show.getHeight());
for(var px of ans.values()) {
        var x= px.getX;
        var y= px.getY;
        
        var showpixel=show.getPixel(x,y);
        var hidepixel=hide.getPixel(x,y);
        
        px.setRed(showpixel.getRed() + hidepixel.getRed());
        px.setGreen(showpixel.getGreen() + hidepixel.getGreen());
        px.setBlue(showpixel.getBlue() + hidepixel.getBlue());
}
return ans;
}

var start=new SimpleImage("usain.jpg");
var hide=new SimpleImage("skyline.jpg");

start=chop2hide(start);
hide=shift(hide);
var answer=combine(start,hide);
print(answer);