import express from "express";
import {
  CreateApplication,
  DeleteApplication,
  GetAllApplications,
  UpdateApplications,
} from "../Controllers/application.controller.js";
import { protect } from "../Middleware/auth.middleware.js";

const router = express.Router();

router.use(protect)

router.get("/", GetAllApplications);
router.post("/", CreateApplication);
router.put("/:id", UpdateApplications);
router.delete("/:id", DeleteApplication);


export default router