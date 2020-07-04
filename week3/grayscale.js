var image;

function upload(){
var dd1=document.getElementById("d1");
var fileinput=document.getElementById("finput");
image=new SimpleImage(fileinput);
image.drawTo(dd1);
}


function makeGray(){
 for (var pixel of image.values()){
   var avg = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var dd1=document.getElementById("d1");
  image.drawTo(dd1);
}