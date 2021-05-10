import { gql } from "apollo-server";
import { rankingList } from "../app";

export const rankTypeDefs = gql`
  type Rank {
    rank: Int
    benchmark: Int
    os: String
    browser: String
    device: Device
  }
  input RankInput {
    benchmark: Int
    os: String
    browser: String
    device: Device
  }
`;

export const rankResolvers = {
  Query: {
    ranks: () => rankingList.map((item, idx) => ({ ...item, rank: idx + 1 })),
  },
  Mutation: {
    addRank: (parent, args) => {
      rankingList.push(args.input);
      rankingList.sort((a, b) => a.benchmark - b.benchmark);
      return true;
    },
  },
};
