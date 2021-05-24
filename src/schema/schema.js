const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;
const axios = require("axios");

// GraphQL needs an schema to work from

// fields needs the arrow func to stop defined/circular deps
const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      // We expect lists of users using this instead
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then((response) => response.data);
      },
    },
  }),
});

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
    company: {
      type: CompanyType,
      resolve(parentValue, args) {
        // console.log('parentValue:', parentValue, 'args:', args);
        return axios
          .get(`http://localhost:3000/companies/${parentValue.companyId}`)
          .then((response) => response.data);
      },
    },
  }),
});

// And requires a root query to jump off into
// demonstrating connection to an outside server rather than static wiring.
// adding siblings to make other connection queries for the RootQueryType
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/users/${args.id}`)
          .then((response) => response.data);
      },
    },
    company: {
      type: CompanyType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${args.id}`)
          .then((response) => response.data);
      },
    },
  }),
});

// Mutations ( adds, or modifies data )

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: new GraphQLNonNull(GraphQLInt) },
        companyId: { type: GraphQLString },
      },
      resolve(parentValue, { firstName, age }) {
        return axios
          .post(`http://localhost:3000/users`, { firstName, age })
          .then((response) => response.data);
      },
    },
    editUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        companyId: { type: GraphQLString },
      },
      resolve(parentValue, args) {
        return axios
          .patch(`http://localhost:3000/users/${args.id}`, args)
          .then((response) => response.data);
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, { id }) {
        return axios
          .delete(`http://localhost:3000/users/${id}`)
          .then((response) => response.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
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
