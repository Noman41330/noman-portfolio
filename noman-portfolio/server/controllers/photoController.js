import Photo from "../models/Photo.js";

export const uploadPhoto = async (req, res) => {
  try {
    const photo = await Photo.create({
      title: req.body.title,
      image: req.file.filename,
    });

    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ message: "Photo upload failed" });
  }
};

export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.json(photos);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch photos" });
  }
};