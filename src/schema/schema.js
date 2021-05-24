const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;
const _ = require("lodash");

// GraphQL needs an schema to work from

const users = [
  {
    id: "23",
    firstName: "Bill",
    age: 20,
  },
  {
    id: "47",
    firstName: "Samantha",
    age: 21,
  },
];

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLString,
    },
    firstName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
  },
});

// And requires a root query to jump off into
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parentValue, args) {
        return _.find(users, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
