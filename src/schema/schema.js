const { GraphQLSchema } = require("graphql");
const RootQueryType = require("./root_query_type");
const mutation = require("./mutations");

// GraphQL needs an schema to work from
module.exports = new GraphQLSchema({
  // And requires a root query to jump off into
  query: RootQueryType,
  mutation,
});

// You can make fragments in GraphQL so you can reduce copy/pasting
/*
fragment companyDetails on User {
  id
  name
  description
}
*/
