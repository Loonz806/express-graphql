const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = 4000;

app.use("/graphql", graphqlHTTP({ graphiql: true }));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
