const process = require("process");
const { connectMongo } = require("./src/db/connectionDB");
require("dotenv").config();
const express = require("express");
const routes = require("./src/routes/api/heroes");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/heroes", routes);
module.exports = app;

const start = async () => {
  try {
    await connectMongo();
    console.log("Database connection successful");
    app.listen(PORT, (err) => {
      if (err) console.error("Error at server launch:", err);
      console.log(`Server works at port ${PORT}!`);
    });
  } catch (err) {
    console.error(`Failed to launch application with error: ${err.message}`);
    process.exit(1);
  }
};

start();
