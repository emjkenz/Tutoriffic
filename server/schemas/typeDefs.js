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
    lessons: [Lesson]
    lesson(id: String!): Lesson
    grades: [Grade]
    users: [User]
  }

  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    saveLesson(lessonData: LessonInput!): Lesson
    removeLesson(id: String!): Lesson
    loginUser(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
