const express = require("express");
const app = express();
// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");
// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});
app.get("/meals", async (request, response) => {
  response.json(mealsWithReviews);
});
//For each meal, if there are reviews matching it's meal ID
const mealsWithReviews=meals.map((mealItem)=>{
  mealItem.reviews=[];
  reviews.filter((review)=>{
    if(mealItem.id===review.mealId){
      mealItem.reviews.push(review);
    }
  })
  return mealItem;
})
//Respond with the json for all the meals (including it's reviews) that are cheap (you define what a cheap meal is)
app.get("/cheap-meals", async (request, response) => {
  response.json(mealsWithReviews.filter((mealPrice) => mealPrice.price < 100));
});
//Respond with the json for all the meals (including it's reviews) that can fit lots of people
app.get("/large-meals", async (request, response) => {
  response.json(mealsWithReviews.filter((meal) => meal.maxNumberOfGuests >15));
});
//Respond with the json for a random meal (including it's reviews)
app.get("/meal", async (request, response) => {
  response.json(mealsWithReviews[Math.floor(Math.random() *mealsWithReviews.length)]);
});
//Respond with the json for all reservations
app.get("/reservations", async (request, response) => {
  response.json(reservations);
});
//Respond with the json for a random reservation
app.get("/reservation", async (request, response) => {
  response.json(reservations[Math.floor(Math.random() *reservations.length)]);
});
module.exports = app;