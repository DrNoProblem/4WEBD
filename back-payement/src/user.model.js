const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'orga'],
    required: true
  },
  payement: {
    type: Array,
    required: false,
  },
  reserv: {
    type: Array,
    required: false,
  },
  eventOwner: {
    type: Array,
    required: false,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
