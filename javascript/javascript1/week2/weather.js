let clothes;
let temp;
function clothesToWear(temp)
{
    if (temp <=10)
    {
        return (clothes =`its ${temp} degrees --- jackets and winter clothes should wear`);
    }
    else if (temp >10 && temp<=16)
    {
        return (clothes=`its Okay ${temp} degrees. normal clothes should be wear`);
    }
    else 
    {
        return(clothes=`its summer with ${temp} degrees. Shorts and simple clothes should be wear`);
    }
    console.log(clothes);
}
console.log(clothesToWear(10));
console.log(clothesToWear(16));
console.log(clothesToWear(20));