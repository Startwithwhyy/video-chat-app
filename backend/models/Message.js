// models/Message.js
import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  text: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  sessionId: { type: mongoose.Schema.Types.ObjectId, ref: "Session" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Message", messageSchema);
