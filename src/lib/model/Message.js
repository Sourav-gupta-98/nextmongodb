import mongoose from "mongoose";

const message = new mongoose.Schema({
  title: String,
  message: String,
  status: String,
});

export const Message =
  mongoose.models.message || mongoose.model("message", message);
