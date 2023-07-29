const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
  await User.deleteMany({});

  const Username = await Tech.insertMany();

  console.log("Users seeded!");
  process.exit();
});
