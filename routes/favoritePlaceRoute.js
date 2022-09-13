import express from "express";
import {
  createFavoritePlace,
  getAllFavoritePlaces,
  getFavoritePlacesByProperty,
  getFavoritePlacesByAnmimalId,
  getPopularPlace,
  updateFavoritePlaceById,
  deleteFavoritePlaceById,
} from "../controllers/favoritePlaceController.js";

const router = express.Router();

router.post("/create", createFavoritePlace);
router.get("/all", getAllFavoritePlaces);
router.get("/findprop", getFavoritePlacesByProperty);
router.get("/findanimal/:id", getFavoritePlacesByAnmimalId);
router.get("/getpopular", getPopularPlace);
router.put("/update/:id", updateFavoritePlaceById);
router.delete("/delete/:id", deleteFavoritePlaceById);

export default router;
