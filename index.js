const mongoose = require("mongoose");
const app = require("./app.js");
const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/biharsathi");
};
connectDB()
  .then(() => console.log("mongoDB connection established...."))
  .catch(() => console.log("DB not connected...."));
app.listen(3003, () => {
  console.log("Server is live.......");
});
