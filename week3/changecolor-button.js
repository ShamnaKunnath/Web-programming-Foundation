
//changes banckground color of the div
function changecolor(){
  
	var dd1=document.getElementById("d1");
	var dd2=document.getElementById("d2");

	dd1.className="blueback";
	dd2.className="yellowback";
}

//changes div content
function changetext(){
  
	var dd1=document.getElementById("d1");
	var dd2=document.getElementById("d2");

	dd1.innerHTML="BLUE";
	dd2.innerHTML="YELLOW";
}

//change font color in a div
function changestyle(){
  
	var dd1=document.getElementById("d1");
	var dd2=document.getElementById("d2");

	dd1.style.color="YELLOW";
	dd2.style.color="BLUE";
}

//changes value of button
function changevalue(){
  
	var dd1=document.getElementById("d3");
	var dd2=document.getElementById("d4");
	var dd3=document.getElementById("d5");
	var dd4=document.getElementById("d6");

	dd1.value="new change color";
  	dd2.value="new change text";
	dd3.value="new change style";
	dd4.value="new change value";

}
