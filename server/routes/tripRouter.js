import express from "express";
import { createTrip } from "../controllers/tripController.js";

const router = express.Router();

router.post("/new", createTrip);

export default router;