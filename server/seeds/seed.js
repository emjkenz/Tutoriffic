const db = require("../config/connection");
const { User } = require("../models");
const userData = require("./userData.json");

db.once("open", async () => {
  await User.deleteMany({});

  const user = await User.insertMany(userData);

  console.log("Users seeded!");
  process.exit();
});
