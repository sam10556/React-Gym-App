const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("./models/db");
const User = require("./models/User");
const port = process.env.PORT || 5555;
const app = express();
const bodyParser = require("body-parser");
const AuthRouter = require("./routes/AuthRouter");

// app.use(express.json());

app.use(express.json());
app.use(cors());

app.use("/auth", AuthRouter);

app.listen(port, () => {
  console.log("server runinn");
});
