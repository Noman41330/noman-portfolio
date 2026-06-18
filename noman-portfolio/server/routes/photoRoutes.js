import express from "express";
import multer from "multer";
import {
  uploadPhoto,
  getPhotos,
} from "../controllers/photoController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), uploadPhoto);
router.get("/", getPhotos);

export default router;