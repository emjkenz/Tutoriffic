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
      addUser: async (parent, { userData }) => {
        console.log("Received User Data:", userData);
        const { firstName, lastName, email, password } = userData;
        const user = await User.create({
          firstName,
          lastName,
          email,
          password,
        });
        const token = signToken(user);
        return { token, user };
      },
    },
  },
};

module.exports = resolvers;
