const express = require("express");
const router = express.Router();
const meals = require("./../data/meals.json");
//Respond with the json for the meal with the corresponding id
router.get("/:id", async(request, response) => {
  try {
      const { id } = request.params;
      const mealId = meals.filter((meal) => meal.id === parseInt(id));
      if (mealId < 1) {
          response.send(`Meal Id : ${id} not found!`);
      } else {
          response.send(mealId);
      }
  } catch (error) {
      throw error;
  }
});
//Respond with the json for all the meals
router.get("/", async (request, response) => {
  try {
    response.json(meals);
    console.log("in /api/meals");
  } catch (error) {
    throw error;
  }
});
//meals parameters
router.get('/', (request, response) => {
  const parameters = {
      maxPrice: request.query.maxPrice,
      title: request.query.title,
      createdAfter: request.query.createdAfter,
      limit: request.query.limit,
  };
  //Get meals that has a price smaller than maxPrice
  if (parameters.maxPrice) {
      const smallerThanMaxPrice = meals.filter(meal => meal.price < parameters.maxPrice);
      response.send(smallerThanMaxPrice);
      console.log(smallerThanMaxPrice);
  //Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
  } else if (parameters.title) {
      const sameTitle = meals.filter(meal => meal.title.includes(parameters.title));
      response.send(sameTitle);
      //Get meals that has been created after the date
  } else if (parameters.createdAfter) {
      const createdAfterMeals = meals.filter(meal => {
          return new Date(meal.createdAt) > new Date(parameters.createdAfter);
      });
      response.send(createdAfterMeals);
      //Only specific number of meals
  } else if (parameters.limit) {
      mealsLimit = meals.slice(0, parameters.limit);
      response.send(mealsLimit);
  } else {
      response.send('invalid query parameter');
  }
});
module.exports = router;