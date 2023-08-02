import { gql } from "@apollo/client";

export const QUERY_LOGEDIN = gql`
  query loggedInUser {
    loggedInUser {
      firstName
      lastName
    }
  }
`;