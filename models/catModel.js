import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
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
  breed: {
    type: String,
    required: true,
  },
  isAggressive: {
    type: Boolean,
  },
  isShortHair: {
    type: Boolean,
  },
  canFly: {
    type: Boolean,
    default: false,
  },
  favoriteToys: {
    type: [String],
  },
  isBoss: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Cat", CatSchema);
