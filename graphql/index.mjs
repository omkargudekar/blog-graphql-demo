import GQ from "graphql";
const { GraphQLSchema } = GQ;
import rootQueryType from "./rootQueryType.mjs";
import mutationQueryType from "./mutationQueryType.mjs";

const schema = new GraphQLSchema({
  query: rootQueryType,
  mutation: mutationQueryType,
});

export default schema;
