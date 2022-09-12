import mongoose from "mongoose";

const FavoritePlaceSchema = new mongoose.Schema({
  place: {
    type: String,
    required: true,
  },
  isIndoor: {
    type: Boolean,
    required: true,
  },
  temperature: {
    type: Number,
    min: -25,
    max: 45,
    required: true,
  },
  favoriteRating: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  photo: {
    type: String,
  },
  animal: {
    type: [String],
    default: [],
  },
});

export default mongoose.model("FavoritePlace", FavoritePlaceSchema);
