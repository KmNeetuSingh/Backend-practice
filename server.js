const express = require("express");
const app = express();
const logger = require("./middleware/logger.middleware")
app.use(express.json());
const connect = require("./configs/mongo.config");
const todorouter = require("./routes/todo.route");
require("dotenv").config();
connect();
app.get("/health", (req, res) => {
  res.end("Server is running");
});

app.use(logger)
app.use("/todo", todorouter);
Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
