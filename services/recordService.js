"use strict";
const recordDB = require("../database/recordDatabase");

const getRecordForWorkoutService = (workoutId) => {
  try {
    const record = recordDB.getRecordForWorkoutDB(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};
module.exports = { getRecordForWorkoutService };
