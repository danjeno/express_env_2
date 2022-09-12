import birdModel from '../models/birdModel.js';
import catModel from '../models/catModel.js';
import dogModel from '../models/dogModel.js';
import favoritePlaceModel from '../models/favoritePlaceModel.js';

export const createFavoritePlace = async (req, res) => {
  try {
    const newfavoritePlace = new favoritePlaceModel(req.body);
    await newfavoritePlace.save();
    res.status(201).send("new animal created");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

