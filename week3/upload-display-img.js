function upload(){
var dd1=document.getElementById("d1");
 var fileinput=document.getElementById("finput");
  var image=new SimpleImage(fileinput);
image.drawTo(dd1);
}