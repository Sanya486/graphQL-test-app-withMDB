const Car = require("../models/Car");

const resolvers = {
  getCar: async ({ id }) => {
    try {
      const user = await Car.findById(id);
      return user;
    } catch (err) {
      throw new Error("Error retrieving car");
    }
  },
  getCars: async () => {
    try {
      const cars = await Car.find();
      return cars;
    } catch (err) {
      throw new Error("Error retrieving cars");
    }
  },
  createCar: async ({ brand, model, color, horsePowers }) => {
    try {
      const car = new Car({ brand, model, color, horsePowers });
      await car.save();
      return car;
    } catch (err) {
      throw new Error("Error creating car");
    }
  },
  updateCar: async ({ id, brand, model, color, horsePowers }) => {
    try {
      const car = await Car.findByIdAndUpdate(
        id,
        { brand, model, color, horsePowers },
        { new: true }
      );
      return car;
    } catch (err) {
      throw new Error("Error updating car");
    }
  },
  deleteCar: async ({ id }) => {
    try {
        console.log(1)
        const car = await Car.findByIdAndDelete(id);
      return car;
    } catch (err) {
      throw new Error("Error deleting car");
    }
  },
};

module.exports = resolvers;
