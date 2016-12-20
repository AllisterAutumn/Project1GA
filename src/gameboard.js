$(document).ready(function() {

//This file controls the 'lose' function in my game. If a div is mousedover, then the player will be alerted and sent back to the beginning 
    //of the board

    $('.red, .blue, .green, .up, .down, .off, .white, .footbox, .left, .right, .foot').mouseover(function() {
        console.log('):');
        document.getElementById("main").scrollTop += 1900;

        alert("Stay Strong! You'll reach the top soon! Hint: If you don't move, they can't hurt you!")
    });



})
