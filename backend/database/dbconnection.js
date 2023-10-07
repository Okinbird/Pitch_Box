const { default: mongoose } = require("mongoose");

const DB = () => {
  try {
    const conn= mongoose.connect("mongodb://localhost:27017/board");
    console.log("Database Connected Successfully");
  }
  catch (error) {
    console.log("Database error");
  }
}
module.exports = DB
