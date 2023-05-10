const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({  

  classe: {
    type: String,
    required: true,
    allowNull: false
  },
  picture: {
    type: String,
    required: true,
    allowNull: false
  },
  color: {
    type: Array,
    required: true,
    allowNull: false,
  },
  object: {
    type: Array,
    required: true,
    allowNull: false,
  },
  favorite: {
    type: Number,
    required: false,
    allowNull: false
  },
  creator: {
    type: String,
    required: true,
    allowNull: false
  }

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;