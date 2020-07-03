function dochange() {
  alert('cliked button with JS fun');
}
function doconfirm() {
 var choice=confirm('cliked button with JS fun');
  if(choice){
    var message="You pressed OK!";
  }
  else {
    var message="Are you sure you want to cancel?";
  }
  alert(message);
}