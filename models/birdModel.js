import mongoose from "mongoose";

const BirdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  canSing: {
    type: Boolean,
  },
  canFly: {
    type: Boolean,
  },
  isBoss: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Bird", BirdSchema);