class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    
    convertToCurrency(currency) {
        fetch(
                "https://v6.exchangerate-api.com/v6/2094ae77092b17e58dd73819/latest/DKK"
            )
            .then((response) => response.json())
            .then((data) => {
                const currencies = data.conversion_rates;
                const convertCurrency = this.price * currencies[currency];
                console.log(convertCurrency);
            });
      
      }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    removeProduct(product) {
      if (this.products.length !== 0) {
        this.products.splice(this.products.indexOf(product), 1);
      }
    }
  
    searchProduct(productName) {
      return this.products.filter((data) => data.name.toLowerCase() === productName.toLowerCase());
    }
  
    getTotal() {
      return this.products.map((data) => data.price).reduce((a, b) => a + b, 0);
    }
  
    getUser() {
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => response.json())
        .then((data) => {
          const p = document.createElement("p");
          p.textContent = `Username: ${data.username}`;
          document.body.appendChild(p);
        });
    }
    renderProducts() {
      const bodyElement = document.querySelector("body");
      const ul = document.createElement("ul");
      ul.innerHTML = " ";
      const h2 = document.createElement("h2");
      h2.textContent = `Shopping cart`;
      bodyElement.appendChild(h2);
  
      this.products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = `Product ${product.name} - Price ${product.price}`;
        ul.appendChild(li);
      });
      bodyElement.appendChild(ul);
  
      const TotAmt = document.createElement("p");
      TotAmt.textContent = `Total Amount ${this.getTotal()}`;
      bodyElement.appendChild(TotAmt);
    }
  }
  
  const shoppingCart = new ShoppingCart();
  
  const Laptop = new Product("Dell Laptop", 5000);
  const Monitor = new Product("monitor", 800);
  const Keyboard = new Product("Trust Keyboard", 100);
  const Mouse = new Product("Logitech Mouse", 150);
  const Dvd = new Product("Dvd", 250);
  const Mobile = new Product("Samsung s10", 6500);
  const Cable = new Product("Lan Cable", 350)

  const total = shoppingCart.getTotal();
  
  shoppingCart.addProduct(Laptop);
  shoppingCart.addProduct(Monitor);
  shoppingCart.addProduct(Keyboard);
  shoppingCart.addProduct(Mouse);
  shoppingCart.addProduct(Dvd);
  shoppingCart.addProduct(Mobile);
  shoppingCart.addProduct(Cable);
  
  shoppingCart.removeProduct(Cable);
    
  shoppingCart.getUser();
  // Assuming dkk as default currency
  const plant = new Product("plant", 50);
  console.log(plant.convertToCurrency("USD")); // 7.85
  const Woofer = new Product("Woofer", 100);
  console.log(Woofer.convertToCurrency("INR")); //1160
  console.log(shoppingCart);
  shoppingCart.renderProducts();
  const user = shoppingCart.getUser() .then(user => shoppingCart.renderUser(user))
