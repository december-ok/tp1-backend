import { gql } from "apollo-server";

export const mutations = gql`
  type Mutation {
    addRank(input: RankInput): Boolean
  }
`;
