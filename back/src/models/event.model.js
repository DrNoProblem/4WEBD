const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({  

  name: {
    type: String,
    required: true,
    allowNull: false
  },
  picture: {
    type: String,
    required: true,
    allowNull: false
  },
  maxPlace: {
    type: Number,
    required: true,
    allowNull: false,
  },
  dispoPlace: {
    type: Number,
    required: true,
    allowNull: false,
  },
  usersReserve: {
    type: Array,
    required: false
  }

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;