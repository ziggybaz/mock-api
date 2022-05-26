"use strict";
//we are requiring the db.json so as to read data from the json database that we created.
const DB = require("./db.json");
const { saveTODB } = require("./utilities");

//retrieving all workouts from db.json.
const getAllWorkoutsDB = () => {
  return DB.workouts;
};

//posting data to db.
const postWorkoutDB = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveTODB(DB);
  return newWorkout;
};
module.exports = { getAllWorkoutsDB, postWorkoutDB };
