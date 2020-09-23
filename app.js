import express from "express";
import EGQ from "express-graphql";
import schema from "./graphql/index.mjs";

const { graphqlHTTP } = EGQ;

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
