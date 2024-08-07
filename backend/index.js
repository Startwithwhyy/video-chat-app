// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.js";
import sessionRoutes from "./routes/session.js";
import messageRoutes from "./routes/message.js";

app.use("/messages", messageRoutes);

app.use("/sessions", sessionRoutes);

app.use("/users", userRoutes);


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((error) => console.error("MongoDB connection error:", error.message));
