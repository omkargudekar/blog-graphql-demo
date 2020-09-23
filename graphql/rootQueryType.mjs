import GQ from "graphql";
const { GraphQLInt, GraphQLObjectType, GraphQLList } = GQ;
import { authorType, postType } from "./types/index.mjs";
import store from "../store/index.mjs";
const rootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root Query Type",
  fields: {
    post: {
      type: postType,
      args: { postID: { type: GraphQLInt } },
      resolve: (parent, args) => {
        return store.posts.find((postObjs) => postObjs.postID == args.postID);
      },
    },
    posts:{
      type: GraphQLList(postType),
      resolve: () => {
        return store.posts;
      },
    },
    authors: {
      type: GraphQLList(authorType),
      resolve: () => {
        return store.authors;
      },
    },
  },
});

export default rootQueryType;
