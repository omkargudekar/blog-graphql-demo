import GQ from "graphql";
const { GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList } = GQ;
import { authorType, postType } from "./types/index.mjs";
import store from "../store/index.mjs";

const mutationQueryType = new GraphQLObjectType({
  name: "MutationQueryType",
  description: "Mutation Query Type",
  fields: {
    addPost: {
      type: postType,
      args: {
        postTitle: {
          type: GraphQLString,
        },
        postContent: {
          type: GraphQLString,
        },
        postAuthor: {
          type: GraphQLInt,
        },
      },
      resolve: (parent, args) => {
        const newPostID =
          store.posts.reduce((a, b) => {
            return a.postID > b.postID ? a : b;
          }).postID + 1;
        const newPost = { ...args, postID: newPostID };
        store.posts.push(newPost);
        return newPost;
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

export default mutationQueryType;
