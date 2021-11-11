const express = require("express");
const router = express.Router();

const reservations = require("../data/reservations.json");
//Respond with the json for all reservations *
router.get("/", async(request, response) => {
  try {
      response.json(reservations);
      console.log("in/api/reservations");
  } catch (error) {
      throw error;
  }
});
//Respond with the json for the reservation with the corresponding id 
router.get("/:id", async(request, response) => {
  try {
      const { id } = Request.params;
      const reservationId = reservations.filter((reservation) => reservation.id === parseInt(id));
      if (reservationId < 1) {
          response.send(` Reservation Id : ${id} not found !`);
      } else {
          response.send(reservationId);
      }
  } catch (error) {
      throw error;
  }
});
module.exports = router;