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
  body('classe')
    .notEmpty().withMessage('classe is required.')
    .isString().withMessage('classe should be a string.'),
  body('picture')
    .notEmpty().withMessage('picture is required.')
    .isURL().withMessage('picture should be a URL.'),
  body('color')
    .notEmpty().withMessage('color is required.')
    .isArray().withMessage('color should be a string.'),
  body('object')
    .notEmpty().withMessage('object is required.')
    .isArray().withMessage('object should be a string.'),
  body('favorite')
    .notEmpty().withMessage('favorite is required.')
    .isInt().withMessage('favorite should be a number.'),
  body('creator')
    .notEmpty().withMessage('creator is required.')
    .isString().withMessage('creator should be a string.'),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { classe, picture, color, object, favorite, creator } = req.body;
    try {
      const hotel = await Event.create({
        classe,
        picture,
        color,
        object,
        favorite,
        creator,
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
  const { classe, picture, color, object, favorite, creator } = req.body;

  try {
    const event = await Event.findByIdAndUpdate(
      id,
      {
        classe,
        picture,
        color,
        object,
        favorite,
        creator,
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