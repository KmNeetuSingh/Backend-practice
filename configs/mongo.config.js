const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.Mongo_URI);
    console.log("Connect to Db");
  } catch (err) {
    console.log(`${err}`);
  }
};
module.exports = connect;
