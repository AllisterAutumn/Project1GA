$(document).ready(function(){

$('.left').animate({bottom: "-=1000px"}, 5000);
$('.right').animate({bottom: "-=1000px"}, 5000);


class Enemy {
constructor (){
  this.id = null;
this.color = null;
this.x = null;
this.y = null;
this.rotation = null;
}
 setPosition(x,y){
this.x = x;
this.y =y;


 }

}


/*class Enemy {
constructor (id, color, rotation){
  this.id = id;
this.color = color;
this.x = null;
this.y = null;
this.rotation = rotation;
}
 setPosition(x,y){
this.x = x;
this.y =y;


 }

}*/


let spin0 = new Enemy();
let spin1 = new Enemy();
let spin2 = new Enemy();
let spin3 = new Enemy();
let spin4 = new Enemy();

let spinClass = [spin0, spin1, spin2,spin3,spin4];
$('.spin').each(function(index, el) {
//console.log(index,el);
//console.log(spinClass[index]);
console.log($('.spin').eq(index).id);
/*spinClass[index].id = el.id;
spinClass[index].color = 'green';
spinClass[index].rotation = 'clockwise';*/

//spinClass[index].setPosition(el.offset().left, el.offset().top);
//console.log(one.x,one.y);


});


})

function anchor (){
  location.href = "index.html#anchor";
}
