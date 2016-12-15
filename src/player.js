$(document).ready(function(){
$(document).keydown(function(key) {
switch(key.which) {
  case 37:
  //left
$('#square').animate({ left: "-=10px" }, 5);
//right
    break;
  case 39 :
$('#square').animate({ left: "+=10px" }, 5);
    break;
//top
     case 38 :
$('#square').animate({ top: "-=10px" }, 5);
    break;
    //bottom
     case 40 :
$('#square').animate({ bottom: "-=10px" }, 10);
    break;

    /* case 39, 40 :
$('#square').animate({ bottom: "-=10px",  left: "+=10px" }, 'fast');
    break;*/


   /* case 32 :
$('#laser').animate({ bottom: "-=500px" }, 200);
$('#laser').animate({ bottom: "+=500px" }, 200);
    break;*/
}




  /* Act on the event */
});




})



