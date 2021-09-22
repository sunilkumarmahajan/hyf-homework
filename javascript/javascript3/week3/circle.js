let canvas_Element = document.getElementById('mycanvas');
let ctx =  canvas_Element.getContext("2d")
canvas_Element.width = window.innerWidth;
canvas_Element.height = window.innerHeight;

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r; 
        this.startangle = startAngle;
        this.endangle = endAngle;
        this.color = fillColor;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill(); //fill the circle
    }
}
    let createCircle = function () {
    let randox_x = Math.random() * window.innerWidth;
    let randox_y = Math.random() * window.innerHeight;
    let random_radius = Math.floor(Math.random() * 100); //Every 100ms create a new circle instance and draw that to the canvas.
    let random_color = 'rgb(' + Math.floor(Math.random() * 255)  + ',' + Math.floor(Math.random() * 255)  + ',' + Math.floor(Math.random() * 255) + ')';
    const circleObject = new Circle(randox_x, randox_y, random_radius, 0, 2 * Math.PI, random_color);
    circleObject.draw()
}
setInterval(createCircle, 2000) // 2 seconds delay
//to appear circles with mouse move with different size and colors
window.addEventListener('mousemove', function (event) {
    let randox_x = event.x;
    let randox_y = event.y;
    let random_radius = Math.floor(Math.random() * 100);
    let random_color = 'rgb(' + Math.floor(Math.random() * 255)
   + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    const circleObject = new Circle(randox_x, randox_y, random_radius, 0, 2 * Math.PI, random_color);
    circleObject.draw()
})
