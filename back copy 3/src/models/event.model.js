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
  cost: {
    type: Number,
    required: true,
    allowNull: false
  },
  locality: {
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
    required: false,
    allowNull: false,
    default: 1000
  },
  usersReserve: {
    type: Array,
    required: false
  }

});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;