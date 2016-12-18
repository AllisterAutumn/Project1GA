$(document).ready(function() {



    $('.red, .blue, .green, .up, .down, .off, .white, .footbox, .left, .right').mouseover(function() {
        console.log('):');
        document.getElementById("main").scrollTop += 1900;

        alert("Stay Strong! You'll reach the top soon! Hint: If you don't move, they can't hurt you!")
    });



})
