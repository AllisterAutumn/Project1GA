$(document).ready(function() {

    let square = $('#square');
    let squareLeft = $(square).offset().left;
    let squareTop = $(square).offset().top;
    let squareRight = $(square).offset().left + $(square).outerWidth();
    let squareBottom = $(square).offset().top + $(square).outerHeight();


    /*  $(square).outerHeight();
  let squareWidth = $(square).outerWidth();
  let squareX = squareSide + squareWidth;
  let squareY = squareTop + squareHeight
*/



    /*$(document).keydown(function() {
        console.log(squareBottom);
        console.log(squareLeft);
        console.log(squareTop);
        console.log(squareRight);
    })*/

})
