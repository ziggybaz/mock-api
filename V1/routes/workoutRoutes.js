"use strict";

//Router Dependencies.
const express = require("express");
const router = express.Router();
const controllers = require("../../controllers/workoutController");

//Routers.
router.get("/", controllers.getAllWorkouts).post("/", controllers.postWorkout);

router
  .get("/:workoutId", controllers.getOneWorkout)
  .patch("/:workoutId", controllers.updateOneWorkout)
  .delete("/workoutId", controllers.deleteOneWorkout);

module.exports = router;
