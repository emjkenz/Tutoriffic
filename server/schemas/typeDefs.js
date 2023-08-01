const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
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

  type Grade {
    id: String!
    student: Student!
    quiz: Quiz!
    grade: Float!
  }

  type Lesson {
    id: String!
    title: String!
    date: String!
    sections: [Sections]!
    createdBy: ID!
  }

  input LessonInput {
    id: String!
    title: String!
    date: String!
    sections: [SectionInput]!
  }

  type Query {
    GetGrade: [Listing]
    students: [Student]
    auth: [User]
    grade: Listing
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    lessons: [Lesson]
    lesson(id: String!): Lesson
    grades: [Grade]
    users: [User]
  }
`;

module.exports = typeDefs;
