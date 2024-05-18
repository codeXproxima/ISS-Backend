const mongoose = require("mongoose");
const { Compass, Atlas, env } = process.env;

const connectDB = async () => {
  const MONGO_URI = env === "Dev" ? Compass : Atlas;
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(
      `Database Has Been Connected ${conn.connection.host}/${conn.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
