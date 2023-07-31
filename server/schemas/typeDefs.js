const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Student {
    id: String!
    firstName: String!
    lastName: String!
    dateOfBirth: String!
    schoolingLevel: String!
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
    grade: Grade
  }

  type Query {
    GetGrade: [Listing]
    students: [Student]
  }

  type Mutation {
    addUser(userData: UserInput!): AuthPayload
  }
`;

module.exports = typeDefs;
