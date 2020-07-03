
//changes banckground color of the div
function changecolor(){
  
	var dd1=document.getElementById("d1");
	var dd2=document.getElementById("d2");

	dd1.className="blueback";
	dd2.className="orangeback";
}
function doRed(){
var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="red";
  
  var ctx=dd2.getContext("2d");
  ctx.fillStyle="yellow";
  ctx.fillRect(10,10,40,40);
  ctx.fillRect(60,10,40,40);
  
  ctx.fillStyle="black";
  ctx.font="30px Arial";
  ctx.fillText("Hello....",10,80)
}
function doBlue(){
var dd2=document.getElementById("d2");
  dd2.style.backgroundColor="blue";
  var ctx=dd2.getContext("2d");
  ctx.clearRect(0,0,dd2.width,dd2.height);
  
}