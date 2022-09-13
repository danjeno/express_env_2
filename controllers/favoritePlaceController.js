import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";
import favoritePlaceModel from "../models/favoritePlaceModel.js";

export const createFavoritePlace = async (req, res) => {
  try {
    const newFavoritePlace = new favoritePlaceModel({
      ...req.body,
    });
    await newFavoritePlace.save();
    return res.status(201).send("New favourite place successfully created");
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getAllFavoritePlaces = async (req, res) => {
  try {
    const favouritePlaces = await favoritePlaceModel.find();
    return res.status(200).json(favouritePlaces);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getFavoritePlacesByProperty = async (req, res) => {
  try {
    const favoritePlaces = await favoritePlaceModel.find(req.body);
    return res.status(200).json(favoritePlaces);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getFavoritePlacesByAnmimalId = async (req, res) => {
  const models = {
    ["bird"]: birdModel,
    ["cat"]: catModel,
    ["dog"]: dogModel,
  };
  try {
    const favoritePlaces = await favoritePlaceModel.findById(req.params.id);
    //big map thingy
    const animals = await Promise.all(
      //to return all the animals asynchronously in a promise using map to access the animal array in the favouritePlace model and then returning the mongoose model with the value of the animal name
      favoritePlaces.animal.map(async (animal) => {
        return await models[animal.modelName].findOne({
          name: animal.name,
        });
      })
    );
    return res.status(200).json(animals);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getPopularPlace = async (req, res) => {
  try {
    const allPlaces = await favoritePlaceModel.find();
    const popularPlace = allPlaces.reduce((prev, curr) => {
      if (prev.animal.length > curr.animal.length) {
        return prev;
      } else {
        return curr;
      }
    });
    return res.status(200).json(popularPlace.place);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateFavoritePlaceById = async (req, res) => {
  try {
    const favoritePlace = await favoritePlaceModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json(favoritePlace);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteFavoritePlaceById = async (req, res) => {
  try {
    await favoritePlaceModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("Favorite place successfully deleted");
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
