$(document).ready(function(){
$(document).keydown(function(key) {
switch(key.which) {
  case 37:
  //left
$('#square').animate({ left: "-=30px" }, .1);
//right
    break;
  case 39 :
$('#square').animate({ left: "+=30px" }, .1);
    break;
//top
  /* case 40 :
$('#square').animate({ bottom: "-=30px" }, .1);
    break;

     case 38 :
$('#square').animate({ top: "-=30px" }, .1);
    break;*/
    //bottom

/*case 32 :
$('#square').css({
  height: '80px',
  width: '80px'
});
break;*/


//     case 32 :
// $('#laser').animate({ bottom: "-=500px" }, 200);
// $('#laser').animate({ bottom: "+=500px" }, 200);
//     break;
}

});

/*$(document).keyup(function() {
$('#square').css({
  height: '50px',
  width: '50px'
});
});*/


})



