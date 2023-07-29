const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  enum Grade {
    A
    B
    C
    D
    E
    F
  }

  type Listing {
    grade: Grade!
  }

  type Query {
    GetGrade: Listing
  }
`;

module.exports = typeDefs;
