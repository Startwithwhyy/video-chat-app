// models/Session.js
import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
  endedAt: { type: Date },
});

export default mongoose.model("Session", sessionSchema);
