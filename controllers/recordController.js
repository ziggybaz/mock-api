"use strict";
const serviceRecord = require("../services/recordService");

const getRecordForWorkoutController = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: `The above field ':workoutID' is invalid, please check again.`,
    });
  }
  try {
    const getRecordForWorkout =
      serviceRecord.getRecordForWorkoutService(workoutId);
    res.send({ status: "OK", data: getRecordForWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { getRecordForWorkoutController };
