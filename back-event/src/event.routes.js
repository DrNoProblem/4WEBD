const express = require("express");
const router = express.Router();
const eventController = require("./event.controller");
const authController = require("./auth.controller");
const { check, validationResult } = require("express-validator");

//! public route to get all the Events
router.get(
  "/",
  eventController.getEvents
);

//! public route to get an Event by id
router.get(
  "/:id",
  eventController.getEventById
);

//! orga route to create an Event
router.post(
  "/",


  authController.protect,
  authController.restrictTo("orga"),
  eventController.createEvent
);

//! private route to update Event information
router.put(
  "/:id",
  [
    check("name").notEmpty(),
    check("picture").notEmpty(),
    check("maxPlace").notEmpty(),
    check("dispoPlace").notEmpty(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },

  authController.protect,
  eventController.updateEvent
);

//! orga route to delete an Event
router.delete(
  "/:id",
  authController.protect,
  authController.restrictTo("orga"),
  eventController.deleteEvent
);

module.exports = router;
