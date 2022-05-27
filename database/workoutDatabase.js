"use strict";
//we are requiring the db.json so as to read data from the json database that we created.
const DB = require("./db.json");
const { saveToDB } = require("./utilities");

//retrieving all workouts from db.json.
const getAllWorkoutsDB = (filterParams) => {
  try {
    let workouts = DB.workouts;
    if (filterParams.mode) {
      return DB.workouts.filter((workout) =>
        workout.mode.toLocaleLowerCase().includes(filterParams.mode)
      );
    }
    // Other if-statements will go here for different parameters
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

//posting data to db.
const postWorkoutDB = (newWorkout) => {
  //checking to see if workout already exists.
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Sorry, a workout with the name: ${newWorkout.name} already exists`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

//getting one workout from db using the param:id to check for existence.
const getOneWorkoutDB = (workoutId) => {
  try {
    const oneWorkout = DB.workouts.find(
      (workouts) => workouts.id === workoutId
    );
    if (!oneWorkout) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'}`,
      };
    }
    return oneWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//updating one workout in the db and sending back the updated version.
const updateOneWorkoutDB = (workoutId, updates) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === changes.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`,
      };
    }

    const itemForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );

    if (itemForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }

    const updatedWorkout = {
      ...DB.workouts[itemForUpdate],
      ...updates,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.workouts[itemForUpdate] = updatedWorkout;
    saveToDB(DB);

    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

//deleteing one workout, obviously returns nothing.
const deleteOneWorkoutDB = (workoutId) => {
  try {
    const itemForDeletion = DB.workouts.findIndex(
      (workouts) => workouts.id === workoutId
    );
    if (itemForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    DB.workouts.splice(itemForDeletion, 1);
    saveToDB(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkoutsDB,
  postWorkoutDB,
  getOneWorkoutDB,
  updateOneWorkoutDB,
  deleteOneWorkoutDB,
};
