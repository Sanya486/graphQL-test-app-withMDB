const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://sanyok486:JicCP3SuhrLTSRig@cluster0.nd1vspl.mongodb.net/Cars");
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(
  "/cars",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000/cars");
});
