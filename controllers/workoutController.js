"use strict";
const service = require("../services/workoutServices");

//Methods for each endpoint (controller).
const getAllWorkouts = (req, res) => {
  const allWorkouts = service.getAllWorkoutsService();
  res.status(201).send({ status: "ok", data: allWorkouts });
};

const postWorkout = (req, res) => {
  const { body } = req;
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }
  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    trainerTips: body.trainerTips,
  };
  const createdWorkout = service.postWorkoutService(newWorkout);
  res.status(201).send({ status: "ok", data: createdWorkout });
};

const getOneWorkout = (req, res) => {
  const oneWorkout = service.getOneWorkoutService;
  res.send("Get a specific workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = service.updateOneWorkoutService;
  res.send("Make changes to an existing workout, update.");
};

const deleteOneWorkout = (req, res) => {
  service.deleteOneWorkoutService();
  res.send("Delete a workout.");
};

module.exports = {
  getAllWorkouts,
  postWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
