const { Schema, model } = require("mongoose");

const carSchema = Schema({
  brand: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
  color: {
    type: String,
  },
  horsePowers: {
    type: Number,
  },
});

const Car = model("cars", carSchema);

module.exports = Car;
