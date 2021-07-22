//variable declaration
let candyType;
let weight;
let price;
let boughtCandyPrices = [];
let spendpower =0;
//function to add values to array
function addCandy(candyType,weight)
{
    if (candyType==="sweet")
    {
        boughtCandyPrices.push(0.5*weight);
    }
    else if(candyType==="chocolate")
    {
        boughtCandyPrices.push(0.7*weight);
    }
    else if (candyType==="toffee")
    {
        boughtCandyPrices.push(1.1*weight);
    }
    else if (candyType==="chewing-gum")
    {
        boughtCandyPrices.push(0.03*weight);
    }
    else
    {
        console.log("invalid chacolate type");
    }
}
//passing arguments  to function
addCandy("sweet",3);
addCandy("chocolate",5);
addCandy("toffee",15);
addCandy("chewing-gum",20);
//calculation of total amount spent

let amountToSpend = Math.floor(Math.random() * 100);
//function to check to but more or not 
function canBuyMoreCandy()
{
    let i=0;
while (i<boughtCandyPrices.length)
{
    spendpower += boughtCandyPrices[i];
    i++;
}
    if (amountToSpend>spendpower)
    {
        console.log("You can buy more, so please do!");
    }
    else
    {
        console.log("Enough candy for you!");
    }
}
console.log(spendpower);
console.log(amountToSpend);
canBuyMoreCandy();
