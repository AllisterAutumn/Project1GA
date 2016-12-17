$(document).ready(function() {



    let Hero = {
        id: "square",
        color: "orange",
        movement: true,
        x: null,
        y: null,
        Position(x, y) {


            this.x = x;

            this.y = y;
            return x + " " + y
        }
    }

    console.log(Hero);
    console.log(Hero.Position($('#square').offset().left, $('#square').offset().top));
    console.log(Hero);

    $(document).keydown(function(key) {
        switch (key.which) {
            case 37:
                //left
                if ($('#square').offset().left >= $('#main').offset().left) {
                    $('#square').velocity({ left: "-=30px" }, {
                        duration: 0,
                        easing: 'linear'
                    })
                };
                break;

            case 38:
                if ($('#square').offset().top >= $('#main').offset().top) {
                    $('#square').velocity({ top: "-=30px" }, {
                        duration: 0,
                        easing: 'linear'
                    })
                    document.getElementById("main").scrollTop -= 20;
                }
                break;

            case 39:
                if ($('#square').offset().left + $('#square').outerWidth() <= $('#main').offset().left + $('#main').outerWidth()) {
                    $('#square').velocity({ left: "+=30px" }, {
                        duration: 0,
                        easing: 'linear'
                    })
                };
                break;

            case 40:
                if ($('#square').offset().top + $('#square').outerHeight() <= $('#main').offset().top + $('#main').outerHeight()) {
                    $('#square').velocity({ top: "+=30px" }, {
                        duration: 0,
                        easing: 'linear'
                    });
                    document.getElementById("main").scrollTop += 20;
                }
                break;
        }
        // if player.scrollTop is within 3% from the top of the box thing, then scroll with jquery by x pixels

        /* let square = document.getElementById('square');

 if (square.offset().top === $('#main').offset().top - 100) {

     document.getElementById("main").scrollTop -= 200;
 }
*/



    })
})


/*let square = $('#square');
let squareLeft = $(square).offset().left;
let squareTop = $(square).offset().top;
let squareRight = $(square).offset().left + $(square).outerWidth();
let squareBottom = $(square).offset().top + $(square).outerHeight();
console.log(squareBottom);
console.log(squareLeft);
console.log(squareTop);
console.log(squareRight);
*/
