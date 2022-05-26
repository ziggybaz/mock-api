"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const v1Router = require("./V1/routes/workoutRoutes");
const PORT = process.env.PORT || 3000;

//testing route.
app.use("/api/v1/workouts", v1Router);

//middleware.=>parsing data received from client into json format.
app.use(bodyParser.json());

//Listening Port.
app.listen(PORT, () => {
  console.log(`API server listening on PORT: ${PORT}`);
});
