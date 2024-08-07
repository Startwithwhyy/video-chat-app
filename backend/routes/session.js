// routes/session.js
import express from "express";
import auth from "../middleware/auth.js";
import Session from "../models/Session.js";

const router = express.Router();

// Start a New Session
router.post("/start", auth, async (req, res) => {
  const { sessionId, participants } = req.body;

  try {
    const newSession = new Session({ sessionId, participants });
    await newSession.save();

    res.status(201).json(newSession);
  } catch (error) {
    res.status(500).json({ message: "Failed to start session" });
  }
});

// End a Session
router.post("/end/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const session = await Session.findById(id);
    if (!session) return res.status(404).json({ message: "Session not found" });

    session.endedAt = new Date();
    await session.save();

    res.status(200).json({ message: "Session ended successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to end session" });
  }
});

// Get Active Sessions
router.get("/", auth, async (req, res) => {
  try {
    const activeSessions = await Session.find({ endedAt: null }).populate("participants");

    res.status(200).json(activeSessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve sessions" });
  }
});

export default router;
