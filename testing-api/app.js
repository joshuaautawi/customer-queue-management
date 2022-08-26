const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const router = require("./routes/index");
const port = process.env.PORT || 3002;
const database =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/visitor-db";


app.use(express.json({ extended: false }));
app.use(cors());

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

mongoose.connection.on("connected", () =>
  console.log(`${database} connected!`)
);
app.use("/", router);
app.listen(port, () => console.log(`Server started on ${port}`));
