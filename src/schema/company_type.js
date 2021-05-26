const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;
const axios = require("axios");

// fields needs the arrow func to stop defined/circular deps
const CompanyType = new GraphQLObjectType({
  name: "Company",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    users: {
      // We expect lists of users using this instead, GraphQLList
      type: new GraphQLList(UserType),
      resolve(parentValue, args) {
        return axios
          .get(`http://localhost:3000/companies/${parentValue.id}/users`)
          .then((response) => response.data);
      },
    },
  }),
});

module.exports = CompanyType;

const UserType = require("./user_type");
