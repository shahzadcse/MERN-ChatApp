const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const { application } = require("express");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json()); // to accept json data

connectDB();

//express api
app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);
// // endpoint for chat data
// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// // endpoint for single chat
// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server started on port ${PORT}`));
