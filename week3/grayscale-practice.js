var image;
var grayimage;

function upload(){
var dd1=document.getElementById("d1");
var fileinput=document.getElementById("finput");
image=new SimpleImage(fileinput);
grayimage=new SimpleImage(fileinput);
image.drawTo(dd1);
}


function makeGray(){
 for (var pixel of grayimage.values()){
   var avg = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var dd2=document.getElementById("d2");
  grayimage.drawTo(dd2);
}