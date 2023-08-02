import { gql } from "@apollo/client";

export const QUERY_LOGEDIN = gql`
  query loggedInUser {
    loggedInUser {
      firstName
      lastName
    }
  }
`;

export const QUERY_ALL_QUIZZES = gql`
  query quizzes {
    quizzes {
      id
      title
      description
      date
    }
  }
`;

export const QUERY_QUIZ = gql`
  query quiz($quizId: String!) {
  quiz(id: $quizId) {
    id
    title
    description
    date
    questions {
      question
      answers
    }
  }
}
`;