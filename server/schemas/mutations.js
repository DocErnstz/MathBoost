const graphql = require("graphql");
const db = require("../pgAdaptor").db;
const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean } = graphql;
const { UserType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        email: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        const query = `INSERT INTO users(email, password, username) VALUES ($1, $2, $3) RETURNING email, password, username`;
        const values = [
          args.username,
          args.password,
          args.email
        ];

        return db
          .one(query, values)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;