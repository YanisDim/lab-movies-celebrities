const mongoose = require("mongoose");
const { Schema } = require("mongoose");

require("../models/Celebrity.model");

let MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  plot: {
    type: String,
    required: true,
  },
  cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
});

module.exports = mongoose.model("Movie", MovieSchema);
