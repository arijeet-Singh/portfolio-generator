const mongoose = require("mongoose");
const url =
  "mongodb+srv://admin:admin@cluster0.shvpidt.mongodb.net/portfolio?retryWrites=true&w=majority";
module.exports.connect = () => {
  mongoose
    .connect(url)
    .then((res) => console.log("Mongo DB connected Successfully"))
    .catch((err) => console.log("Error", err));
};
