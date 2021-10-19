class Circle 
{
    constructor(radius)
    {
        this.radius = radius;
    }
    getDiameter()
    {
        const diameter = 2 * this.radius;
        console.log(`Diameter of the circle: ${diameter}`);
    }
    getCircumference()
    {
        const circumference = 2 * Math.PI * this.radius;
        console.log(`Circumference of the circle: ${circumference}`);
    }
    getArea() 
    {
        const area = Math.PI * (this.radius * this.radius);
        console.log(`Area of the circle: ${area}`);
    }
}
const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference();
circle.getArea();
const circle1 = new Circle(20);
circle1.getDiameter();
circle1.getCircumference();
circle1.getArea();
