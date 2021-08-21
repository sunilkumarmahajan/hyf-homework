console.log("Script loaded");
const products = getAvailableProducts();
function renderProducts(products) 
{
    ClearList();
    const ulJs = document.querySelector("ul");
    for (let i = 0; i < products.length; i++) 
    {
     // list creation, assingning and adding to html
        const liJs = document.createElement("li");
        const nameJs = document.createElement("h2");
        nameJs.innerHTML = products[i].name;
        liJs.appendChild(nameJs);

        const priceJs = document.createElement("h3");
        priceJs.innerHTML = "price: " + products[i].price;
        liJs.appendChild(priceJs);

        const ratingJs = document.createElement("h3");
        ratingJs.innerHTML = "rating: " + products[i].rating;
        liJs.appendChild(ratingJs);
        
        ulJs.appendChild(liJs);
    }
}
renderProducts(products);

// search for some product (searching input in the products arry)
const input = document.querySelector("input");
input.addEventListener("input", ShowResult);  //adding evenlistener

function ShowResult()
{
    const ShowProducts = products.filter((product) =>
    product.name.toLowerCase().includes(input.value.toLowerCase()));
    renderProducts(ShowProducts);
}
// Price search
const priceJs = document.querySelector("#price");
priceJs.addEventListener("keyup", ShowPrice);

function ShowPrice() 
{
    if (parseInt(priceJs.value) > 0) {
        const ShowProducts = products.filter((product) => 
        product.price < parseInt(priceJs.value));
        renderProducts(ShowProducts);
    } 
    else renderProducts(products);
}
// clear the list values
function ClearList() 
{
    const ulJs = document.querySelector("ul");
    while (ulJs.hasChildNodes()) 
    {
        ulJs.removeChild(ulJs.firstChild);
    }
} 