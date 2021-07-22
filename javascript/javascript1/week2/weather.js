let clothes;
let temperature;
function clothesToWear(temperature)
{
    if (temperature <=10)
    {
        return (clothes =`its ${temperature} degrees --- jackets and winter clothes should wear`);
    }
    else if (temperature >10 && temperature<=16)
    {
        return (clothes=`its Okay ${temperature} degrees. normal clothes should be wear`);
    }
    else 
    {
        return(clothes=`its summer with ${temperature} degrees. Shorts and simple clothes should be wear`);
    }
    console.log(clothes);
}
console.log(clothesToWear(10));
console.log(clothesToWear(16));
console.log(clothesToWear(20));
