import express from "express";
import {
  createAnimal,
  getAllAnimals,
  getAnimalById,
  getAllAnimalsByType,
  updateAnimalById,
  deleteAnimalById,
} from "../controllers/bigAnimalController.js";

const router = express.Router();

router.post("/:type/create", createAnimal);
router.get("/getall", getAllAnimals);
router.get("/:type/:id", getAnimalById);
router.get("/:type", getAllAnimalsByType);
router.put("/:type/update/:id", updateAnimalById);
router.delete("/:type/delete/:id", deleteAnimalById);

export default router;
