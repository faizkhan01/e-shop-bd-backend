/*
This module contain the Connection Configuration
*/
const mongoose = require("mongoose");
// mongoose.set("useFindAndModify", false);
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .catch((err) => {});

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
  });
  db.once("open", () => {
    console.log("Database successfully connected");
  });
module.exports = mongoose;
