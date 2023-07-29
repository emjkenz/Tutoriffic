const mongoose = require("mongoose");
const User = require("./User");

const authSchema = new mongoose.Schema({
  token: mongoose.Types.ObjectId,
  user: { type: mongoose.Types.ObjectId, ref: User },
});

const listingSchema = new mongoose.Schema({
  grade: {
    type: String,
    enum: ["A", "B", "C", "D", "E", "F"],
    required: true,
  },
});

const Auth = mongoose.model("Auth", authSchema);
const Grades = mongoose.model("Listing", listingSchema);

module.exports = { Auth, Grades };
