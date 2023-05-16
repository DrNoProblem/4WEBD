const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const { check, validationResult } = require("express-validator");

//! public route to get all the Events
router.get(
  "/",
  authController.getCurrentUser
);