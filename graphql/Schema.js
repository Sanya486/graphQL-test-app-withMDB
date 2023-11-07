const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Car {
    id: ID!
    brand: String!
    model: String!
    color: String
    horsePowers: String
  }

  type Query {
    getCar(id: ID!): Car
    getCars: [Car]
  }

  type Mutation {
    createCar(brand: String!, model: String!, color: String, horsePowers: Int): Car
    updateCar(id: ID!, brand: String, model: String, color: String, horsePowers: Int): Car
    deleteCar(id: ID!): Car
  }
`);

module.exports = schema;
