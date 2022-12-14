const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  expense: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  total: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error("Please don't enter a negative number!:");
    },
  },
});

const Tracker = mongoose.model("Tracker", ExpenseSchema);

module.exports = Tracker;