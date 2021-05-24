const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./src/schema/schema");
const app = express();
const { port } = require("./config/config.js");

// If GraphQL is being used serve via /graphql endpoint the graphiql interface
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
