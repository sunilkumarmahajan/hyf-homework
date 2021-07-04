const firstWords = ["kia", "peugeot", "vw", "toyoto", "volvo", "benz", "nissan", "skoda", "hyundai", "ferrari"];
const secondWords = ["picanto", "benzin", "gas", "i30", "polo", "gitz", "mini", "opel", "2008", "automat"];
const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);
const startUpName = firstWords[randomNumber1]+ " " + secondWords[randomNumber2];
console.log(`The startup ${startUpName} contains ${startUpName.length} characters `);
