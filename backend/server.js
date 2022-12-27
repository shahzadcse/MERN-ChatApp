const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
dotenv.config();

const app = express();

connectDB();

//express api
app.get("/", (req, res) => {
  res.send("api is running");
});

// endpoint for chat data
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

// endpoint for single chat
app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
