const { AuthenticationError } = require("apollo-server-express");
const { User, Auth, Grades } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    auth: async () => {
      return await Auth.find();
    },
    grade: async () => {
      return await Grades.findOne({ enum: String });
    },

    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
        const token = signToken(user);
        return { token, user };
      },
    },
  },
};

module.exports = resolvers;
