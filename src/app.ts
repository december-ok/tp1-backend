import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./typedefs-resolvers/index";

export const rankingList = [];

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(4001).then(({ url }) => {
  console.log(url);
});
