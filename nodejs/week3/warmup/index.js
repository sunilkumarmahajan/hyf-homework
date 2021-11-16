const express = require("express");
const app = express();
const router = express.Router();
app.get("/", (req, res) => res.send("nodejs week3 homework"));
// Parse URL-encoded bodies (as sent by HTML forms)app.use(express.urlencoded({ extended: true }));// Parse JSON bodies (as sent by API clients)app.use(express.json());
app.use("/calculator", router);
router.get("/:operator", async (request, response) => { 
    let operator = request.params.operator;
 function calculator(operation) { 
     firstParam = request.query.firstParam;
      
 let totalOfFirstParameter; 
 if (typeof firstParam === "string" && firstParam !== "") { 
     totalOfFirstParameter = parseInt(firstParam);
 } else if (typeof firstParam === "object" && firstParam !== "" && !firstParam.includes("")) { 
     totalOfFirstParameter = firstParam.map(Number). reduce((accumulator, firstParam) => operation(accumulator, firstParam));
 }
 secondParam = request.query.secondParam; 
 let secondParameterResult ;
 if (typeof secondParam === "string" && secondParam !== null) { 
     secondParameterResult = parseInt(secondParam);
 } else if (typeof secondParam === "object") { 
     secondParameterResult = secondParam.map(Number)
     . reduce((accumulator, secondParam) => operation(accumulator, secondParam));
 }
 const additionOfTwoNumbers = operation(totalOfFirstParameter, secondParameterResult); if (isNaN(totalOfFirstParameter) || isNaN(secondParameterResult)) { response.send(`Please enter the numbers instead of charecters`) } else {
 response.send(`Result Of ${firstParam} and ${secondParam} is ${additionOfTwoNumbers}`) }
 }
 switch (operator) 
 { 
     case "add":
          calculator((num1, num2) => num1 + num2) 
     break; 
     case "subtract": 
     calculator((num1, num2) => num1 - num2);
      break; 
      case "multiply":
           calculator((num1, num2) => num1 * num2);
            break; 
            case "division": 
            calculator((num1, num2) => num1 / num2);
         }})
//multiplication with post
router.post("/multiply", async (request, response) => { 
const firstParam = request.body.firstParam; const secondParam = request.body.secondParam;
 const multiplicationOfTwoNumbers = firstParam * secondParam; response.send(`Multiplication of Two numbers with post is:${multiplicationOfTwoNumbers}`)
})
//division with post
router.post("/division", async (request, response) => {
 const firstParam = request.body.firstParam; const secondParam = request.body.secondParam;
 const DivisionOfTwoNumbers = firstParam / secondParam; response.send(`Division of Two numbers with post is:${DivisionOfTwoNumbers}`)
})
module.exports = router;
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));