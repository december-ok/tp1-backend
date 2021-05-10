import { enums } from "./enums";
import { queries } from "./queries";
import { mutations } from "./mutations";
import { rankResolvers, rankTypeDefs } from "./rank";

export const typeDefs = [enums, queries, mutations, rankTypeDefs];

export const resolvers = [rankResolvers];
