import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.model("Photo", photoSchema);