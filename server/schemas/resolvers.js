const { User, Auth, Grades } = require("../models");
console.log(User);
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    auth: async () => {
      return await Auth.find();
    },
    grade: async () => {
      return await Grades.findOne();
    },
    lessons: async (parent, args, { user }) => {
      if (!user) {
        throw new AuthenticationError(
          "You must be logged in to view your lessons."
        );
      }

      const userLessons = await Lesson.find({ createdBy: user._id });

      return userLessons;
    },
    lesson: async (parent, { id }) => {
      const foundLesson = await Lesson.findOne({ id: id });

      if (!foundLesson) {
        throw new Error("Cannot find a lesson with this id!");
      }

      return foundLesson;
    },

    Mutation: {
      createUser: async (parent, { firstName, lastName, email, password }) => {
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
          throw new AuthenticationError(
            "No user found with this email address"
          );
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
