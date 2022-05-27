"use strict";

//Router Dependencies.
const express = require("express");
const apicache = require("apicache");
const router = express.Router();
const controllers = require("../../controllers/workoutController");
const recordControllers = require("../../controllers/recordController");

//cacheing middleware.
const cache = apicache.middleware;
//Routers for workout.
router
  .get("/", cache("1 minutes"), controllers.getAllWorkouts)
  .post("/", controllers.postWorkout);

router
  .get("/:workoutId", controllers.getOneWorkout)
  .patch("/:workoutId", controllers.updateOneWorkout)
  .delete("/workoutId", controllers.deleteOneWorkout);

//Routers for records.
router.get(
  "/:workoutId/records",
  recordControllers.getRecordForWorkoutController
);
module.exports = router;
