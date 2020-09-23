import GQ from "graphql";
const { GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLString } = GQ;
import authorType from "./authorType.mjs";
import store from "../../store/index.mjs";

const postType = new GraphQLObjectType({
  name: "Post",
  description: "Contains Blog Posts information",
  fields: () => {
    return {
      postID: {
        type: GraphQLInt,
      },
      postTitle: {
        type: GraphQLString,
      },
      postContent: {
        type: GraphQLString,
      },
      author: {
        type: authorType,
        resolve: (parent, args) => {
          return store.authors.find(
            (authorObj) => authorObj.authorID == parent.postAuthor
          );
        },
      },
    };
  },
});

export default postType;
