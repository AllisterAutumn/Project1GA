$(document).ready(function() {



    class Enemy {
        constructor(group, color, attack) {
            this.class = group;
            this.color = color;
            this.x = null;
            this.y = null;
            this.attack = attack;
        }
        setPosition(x, y) {


            this.x = x;

            this.y = y;
            return x + " " + y
        }


    }

    let red = new Enemy('red', 'red', 'spin')

    let blue = new Enemy('blue', 'blue', 'move')

    let green = new Enemy('green', 'green', 'spinmove')

    let up = new Enemy('up', 'purple', 'rotateup')

    let down = new Enemy('down', 'purple', 'rotatedown')

    let white = new Enemy('white', 'white', 'float')

    let left = new Enemy('left', 'teal', 'axe')

    let right = new Enemy('right', 'teal', 'axe2')

    let off = new Enemy('off', 'black', 'off')

    let foot = new Enemy('foot', 'brown', 'stomp');

    /*$(document).keydown(function() {
    foot.setPosition($('#foot').offset().left, $('#foot').offset().top);
    console.log(foot);
})
*/
})







//console.log(one.setPosition($('#one').offset().left, $('#one').offset().top))
//console.log($('#one').offset().left);
//console.log($('#one').offset().t);

/*let one = new Enemy('one', 'green', 'clockwise' );
console.log(one.setPosition($('#one').offset().left, $('#one').offset().top));
console.log(one.x,one.y);*/
