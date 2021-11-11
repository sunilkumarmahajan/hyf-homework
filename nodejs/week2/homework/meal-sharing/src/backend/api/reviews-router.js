const express = require("express");
const router = express.Router();
const reviews = require("./../data/reviews.json");
//Respond with the json for all reviews 
router.get("/", async (request, response) => {
  try {
    response.json(reviews);
    console.log("in /api/reviews");
  } catch (error) {
    throw error;
  }
});
//Respond with the json for the review with the corresponding id 
router.get("/:id", async(request, response) => {
  try {
      const { id } = request.params;
      const reviewId = reviews.filter((review) => review.id === parseInt(id));
      if (reviewId < 1) {
          response.send(`Review Id : ${id} not found !`);
      } else {
          response.send(reviewId);
      }
  } catch (error) {
      throw error;
  }
});
module.exports = router;