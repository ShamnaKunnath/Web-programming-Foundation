var fgimage=null;
var bgimage=null;
var greenThreshold=255;


function loadfgImage(){
var fgfile=document.getElementById("fgimage");
fgimage=new SimpleImage(fgfile);
var dd1=document.getElementById("d1");
fgimage.drawTo(dd1);
}


function loadbgImage(){
var bgfile=document.getElementById("bgimage");
bgimage=new SimpleImage(bgfile);
var dd1=document.getElementById("d2");
bgimage.drawTo(dd1);
}


function clearCanvas(){
  var dd1=document.getElementById("d1");
  var ctx1=dd1.getContext("2d");
  ctx1.clearRect(0,0,dd1.width,dd1.height);
  
  var dd2=document.getElementById("d2");
  var ctx2=dd2.getContext("2d");  ctx2.clearRect(0,0,dd2.width,dd2.height);
}

function greenScreen(){
  if (fgimage==null || !fgimage.complete())
    {
      alert("Foreground is not loaded");
      return;
    }
  if(bgimage==null || !bgimage.complete())
    {
      alert("Background is not loaded");
      return;
    }
  clearCanvas();
var greenThreshold=240;
var output = new SimpleImage(fgimage.getWidth(),fgimage.getHeight());
  for (var pixel of fgimage.values()){
    var x= pixel.getX();
    var y= pixel.getY();
    if(pixel.getGreen()>greenThreshold){
      var bgpixel=bgimage.getPixel(x,y);
      output.setPixel(x,y,bgpixel);
    }
    else{
      output.setPixel(x,y,pixel);
    }
  }
var dd1=document.getElementById("d1");
output.drawTo(dd1);
  
}