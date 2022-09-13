import birdModel from "../models/birdModel.js";
import catModel from "../models/catModel.js";
import dogModel from "../models/dogModel.js";

export const createAnimal = async (req, res) => {
  try {
    const newType = req.params.type;
    const newAnimal = newType;

    if (newType == "bird") {
      const newAnimal = new birdModel({
        ...req.body,
      });
      await newAnimal.save();
      return res.status(201).send("New bird successfully created");
    } else if (newType == "cat") {
      const newAnimal = new catModel({
        ...req.body,
      });
      await newAnimal.save();
      return res.status(201).send("New cat successfully created");
    } else if (newType == "dog") {
      const newAnimal = new dogModel({
        ...req.body,
      });
      await newAnimal.save();
      return res.status(201).send("New dog successfully created");
    } else {
      return res.status(409).send("Invalid animal type");
    }
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getAllAnimals = async (req, res) => {
  try {
    const animals = {};
    const birds = await birdModel.find();
    const cats = await catModel.find();
    const dogs = await dogModel.find();
    animals.birds = birds;
    animals.cats = cats;
    animals.dogs = dogs;
    return res.status(200).json(animals);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getAnimalById = async (req, res) => {
  try {
    const newType = req.params.type;

    if (newType == "bird") {
      const bird = await birdModel.findById(req.params.id);
      return res.status(200).json(bird);
    } else if (newType == "cat") {
      const cat = await catModel.findById(req.params.id);
      return res.status(200).json(cat);
    } else if (newType == "dog") {
      const dog = await dogModel.findById(req.params.id);
      return res.status(200).json(dog);
    } else {
      return res.status(409).send("Invalid animal type");
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getAllAnimalsByType = async (req, res) => {
  try {
    const newType = req.params.type;

    if (newType == "bird") {
      const birds = await birdModel.find();
      return res.status(200).json(birds);
    } else if (newType == "cat") {
      const cats = await catModel.find();
      return res.status(200).json(cats);
    } else if (newType == "dog") {
      const dogs = await dogModel.find();
      return res.status(200).json(dogs);
    } else {
      return res.status(409).send("Invalid animal type");
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateAnimalById = async (req, res) => {
  try {
    const newType = req.params.type;

    if (newType == "bird") {
      const bird = await birdModel.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).send("Animal successfully updated");
    } else if (newType == "cat") {
      const cat = await catModel.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).send("Animal successfully updated");
    } else if (newType == "dog") {
      const dog = await dogModel.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).send("Animal successfully updated");
    } else {
      return res.status(409).send("Invalid animal type");
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteAnimalById = async (req, res) => {
  try {
    const newType = req.params.type;

    if (newType == "bird") {
      const bird = await birdModel.findByIdAndDelete(req.params.id);
      return res.status(200).send("Animal successfully deleted");
    } else if (newType == "cat") {
      const cat = await catModel.findByIdAndDelete(req.params.id);
      return res.status(200).send("Animal successfully deleted");
    } else if (newType == "dog") {
      const dog = await dogModel.findByIdAndDelete(req.params.id);
      return res.status(200).send("Animal successfully deleted");
    } else {
      return res.status(409).send("Invalid animal type");
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
