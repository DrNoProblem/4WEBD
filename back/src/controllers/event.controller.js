const Event = require("../models/event.model");
const { body, validationResult } = require('express-validator');

// Get all Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Event by id
exports.getEventById = async (req, res) => {
  const { id } = req.params;

  try {
    const hotel = await Event.findById(id);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Create new Event
exports.createEvent = [
  body('name')
    .notEmpty().withMessage('name is required.')
    .isString().withMessage('name should be a string.'),
  body('picture')
    .notEmpty().withMessage('picture is required.')
    .isURL().withMessage('picture should be a URL.'),
  body('maxPlace')
    .notEmpty().withMessage('favorite is required.')
    .isInt().withMessage('favorite should be a number.'),
  body('dispoPlace')
    .notEmpty().withMessage('dispoPlace is required.')
    .isInt().withMessage('dispoPlace should be a string.'),


  (req, res, next) => {
    const { maxPlace, dispoPlace } = req.body;
    if (parseInt(maxPlace) < parseInt(dispoPlace)) {
      return res.status(400).json({ message: 'maxPlace cannot be less than dispoPlace.' });
    }
    if (parseInt(dispoPlace) < 0) {
      return res.status(400).json({ message: 'dispoPlace cannot be negative.' });
    }
    next();
  },

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, picture, maxPlace, dispoPlace } = req.body;
    try {
      const hotel = await Event.create({
        name,
        picture,
        maxPlace,
        dispoPlace,
      });
      res.status(201).json(hotel);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
];

// Update Event by id
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, picture, maxPlace, dispoPlace, usersReserve } = req.body;


  (req, res, next) => {
    const { dispoPlace } = req.body;
    if (parseInt(dispoPlace) < 0) {
      return res.status(400).json({ message: 'This event is full booked.' });
    }
    next();
  }

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      {
        name,
        picture,
        maxPlace,
        dispoPlace,
        usersReserve,
      },
      { new: true }
    );
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Event by id
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.json({ message: "Event deleted successfully" });
  } catch (err) {
    next(err);
  }
};