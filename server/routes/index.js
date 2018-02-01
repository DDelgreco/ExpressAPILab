const express = require("express");
const chirpsRouter = require("./chirps");

let app = express.Router();
app.use("/chirps", chirpsRouter);

module.exports = app;
