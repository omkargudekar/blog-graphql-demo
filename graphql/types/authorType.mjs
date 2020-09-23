import GQ from "graphql";
const { GraphQLInt, GraphQLObjectType, GraphQLList, GraphQLString } = GQ;
import postType from "./postType.mjs";
import store from "../../store/index.mjs";

const authorType = new GraphQLObjectType({
  name: "Author",
  description: "Contains Authors information",
  fields: () => {
    return {
      authorID: {
        type: GraphQLInt,
      },
      authorName: {
        type: GraphQLString,
      },
      posts: {
        type: GraphQLList(postType),
        resolve: (parent, args) => {
          return store.posts.filter((postObj) => {
            return postObj.postAuthor == parent.authorID;
          });
        },
      },
    };
  },
});

export default authorType;
