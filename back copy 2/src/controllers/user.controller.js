const bcrypt = require("bcryptjs");
const User = require("../models/user.model");



exports.getCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUserbyId = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.updateCurrentUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id);
    const { email, name, password, payement, reserv, eventOwner } = req.body;
    if (email) user.email = email;
    if (name) user.name = name;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (payement) user.payement = await encryptPayments(payement);
    if (reserv) user.reserv = reserv;
    if (eventOwner) user.eventOwner = eventOwner;
    await user.save();
    res.json({ message: `User ${user.name} updated successfully` });
  } catch (err) {
    next(err);
  }
};

exports.deleteCurrentUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: `User ${user.name} deleted successfully` });
  } catch (err) {
    next(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { email, name, password, role, payement, reserv, eventOwner } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (email) user.email = email;
    if (name) user.name = name;
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }
    if (role) user.role = role;
    if (payement) user.payement = await encryptPayments(payment);
    if (reserv) user.reserv = reserv;
    if (eventOwner) user.eventOwner = eventOwner;
    await user.save();

    res.json({ message: `User ${user.name} updated successfully` });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: `User ${user.name} deleted successfully` });
  } catch (err) {
    next(err);
  }
};

async function encryptPayments(payments) {
  for (let i = 0; i < payments.length; i++) {
    const payment = payments[i];
    const hashedPayment = await bcrypt.hash(payment, 10);
    payments[i] = hashedPayment;
  }
  return payments;
}