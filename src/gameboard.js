$(document).ready(function() {

    /*$('.left').animate({bottom: "-=100px" }, 5000);
    $('.right').animate({bottom: "-=100px"}, 5000);*/

    class Enemy {
        constructor(id, color, animation) {
            this.id = id;
            this.color = color;
            this.x = null;
            this.y = null;
            this.animation = animation;
        }
        setPosition(x, y) {


            this.x = x;

            this.y = y;
            return x + " " + y
        }


    }

    let one = new Enemy('one', 'green', 'clockwise')
    console.log(one);


    console.log(one.setPosition($('#one').offset().left, $('#one').offset().top));


    let foot = new Enemy('foot', 'brown', 'stomp');
    $(document).keydown(function() {
        foot.setPosition($('#foot').offset().left, $('#foot').offset().top);
        console.log(foot);
    })
})







//console.log(one.setPosition($('#one').offset().left, $('#one').offset().top))
//console.log($('#one').offset().left);
//console.log($('#one').offset().t);

/*let one = new Enemy('one', 'green', 'clockwise' );
console.log(one.setPosition($('#one').offset().left, $('#one').offset().top));
console.log(one.x,one.y);*/
