"use strict";
//the service layer receives data from the data-access-layer.
//The servuce layer responds to the controller layer.

const Workout = require("../database/workoutDatabase");
const { v4: uuid } = require("uuid");

const getAllWorkoutsService = () => {
  const allWorkouts = Workout.getAllWorkoutsDB();
  return allWorkouts;
};

const postWorkoutService = () => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdWorkout = Workout.postWorkoutDB(workoutToInsert);
  return createdWorkout;
};

const getOneWorkoutService = () => {
  return;
};

const updateOneWorkoutService = () => {
  return;
};

const deleteOneWorkoutService = () => {
  return;
};

module.exports = {
  getAllWorkoutsService,
  postWorkoutService,
  getOneWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
};
