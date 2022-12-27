const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    //chatName
    chatName: { type: String, trim: true },
    // isGroupChat
    isGroupChat: { type: Boolean, default: false },

    //users
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    //latestMessage
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    //groupAdmin
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamp: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
