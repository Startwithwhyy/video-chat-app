// routes/message.js
import express from "express";
import auth from "../middleware/auth.js";
import Message from "../models/Message.js";

const router = express.Router();

// Send a Message
router.post("/", auth, async (req, res) => {
  const { text, sessionId } = req.body;

  try {
    const newMessage = new Message({ text, sender: req.userId, sessionId });
    await newMessage.save();

    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Failed to send message" });
  }
});

// Get Messages for a Session
router.get("/:sessionId", auth, async (req, res) => {
  const { sessionId } = req.params;

  try {
    const messages = await Message.find({ sessionId }).populate("sender");

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve messages" });
  }
});

export default router;
