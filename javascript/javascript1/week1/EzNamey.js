var firstWords = ["kia", "peugeot", "vw", "toyoto", "volvo", "benz", "nissan", "skoda", "hyundai", "ferrari"];
var secondWords = ["picanto", "benzin", "gas", "i30", "polo", "gitz", "mini", "opel", "2008", "automat"];
var randomNumber = Math.floor(Math.random() * 10);
var startupName = firstWords[randomNumber]+ " " + secondWords[randomNumber];
console.log("The startup: "+ startupName + " contains " + startupName.length + " characters");
