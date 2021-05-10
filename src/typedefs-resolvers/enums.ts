import { gql } from "apollo-server";
export const enums = gql`
  enum Device {
    Mobile
    Tablet
    PC
  }
`;
