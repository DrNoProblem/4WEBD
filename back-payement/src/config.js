require("dotenv").config();

module.exports = {
  port: process.env.PORT || 4001,
  mongodb_uri: process.env.MONGODB_URI,
  jwt_secret: process.env.JWT_SECRET,
};