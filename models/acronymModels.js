const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const acronymSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuid,
    required: true,
  },
  acronym: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

const Acronym = mongoose.model("Acronym", acronymSchema);

module.exports = Acronym;
