"use strict";
//the service layer receives data from the data-access-layer.
//The servuce layer responds to the controller layer.

const Workout = require("../database/workoutDatabase");
const { v4: uuid } = require("uuid");

const getAllWorkoutsService = (filterParams) => {
  try {
    const allWorkouts = Workout.getAllWorkoutsDB(filterParams);
    return allWorkouts;
  } catch (error) {
    throw error;
  }
};

const postWorkoutService = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  try {
    const createdWorkout = Workout.postWorkoutDB(workoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
};

const getOneWorkoutService = (workoutId) => {
  try {
    const oneWorkout = Workout.getOneWorkoutDB(workoutId);
    return oneWorkout;
  } catch (error) {
    throw error;
  }
};

const updateOneWorkoutService = (workoutId, updates) => {
  try {
    const updatedWorkout = Workout.updateOneWorkoutDB(workoutId, updates);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
};

const deleteOneWorkoutService = (workoutId) => {
  try {
    Workout.deleteOneWorkoutDB(workoutId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllWorkoutsService,
  postWorkoutService,
  getOneWorkoutService,
  updateOneWorkoutService,
  deleteOneWorkoutService,
};
