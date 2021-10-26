const express = require("express");
const app = express();
const router = express.Router();
app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.use("/numbers", router);
router.get("/add", async (request, response) => {
    const first = parseInt(request.query.first);
    const second = parseInt(request.query.second);
    const addtwonumbers = first + second;
    response.send(`Sum of Two numbers is:${addtwonumbers}`)
})
router.get("/multiply/:first/:second", async (request, response) => {
    const first = parseInt(request.params.first);
    const second = parseInt(request.params.second);
    const multiplytwonumbers= first * second;
    response.send(`Multiplication of Two numbers is:${multiplytwonumbers}`)
})
 module.exports = router;
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
