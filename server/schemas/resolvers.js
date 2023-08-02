const { User, Auth, Grades, Quiz } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    auth: async () => {
      return await Auth.find();
    },
    grade: async () => {
      return await Grades.findOne({ enum: String });
    },
    loggedInUser: async (parent, args, { user }) => {
      if (!user) {
        return null;
      }
      return user;
    },
    quizzes: async (parent, args, { user }) => {
      if (!user) {
        throw new `AuthenticationError`('You must be logged in to view your lessons.');
      }

      const userQuizzes = await Quiz.find({ createdBy: user._id });

      return userQuizzes;
    },
    quiz: async (parent, { id }) => {
      const foundQuiz = await Quiz.findOne({ id: id });
      if (!foundQuiz) {
        throw new Error('Cannot find a quiz with this id!');
      }
      return foundQuiz;
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      const token = signToken(user);
      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
