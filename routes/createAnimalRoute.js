import express from "express";
import {createFavoritePlace} from "../controllers/createController.js";

const router = express.Router();

router.post("/create", createFavoritePlace);

export default router;