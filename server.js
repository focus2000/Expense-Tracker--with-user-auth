const express = require("express");
require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

connectDB();

const transactions = require("./routes/transactions");

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);
app.use("/users", require("./routes/user"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("clients/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "clients", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
