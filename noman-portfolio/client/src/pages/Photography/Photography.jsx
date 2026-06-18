import { useEffect, useState } from "react";
import axios from "axios";

export default function Photography() {
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const fetchPhotos = async () => {
    const res = await axios.get("http://localhost:5000/api/photos");
    setPhotos(res.data);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/photos", formData);
    setTitle("");
    setImage(null);
    fetchPhotos();
  };

  return (
    <div className="page">
      <h1>Natural Photography</h1>

      <form onSubmit={handleUpload}>
        <input
          type="text"
          placeholder="Photo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Upload Photo</button>
      </form>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo._id}>
            <img
              src={`http://localhost:5000/uploads/${photo.image}`}
              alt={photo.title}
              width="250"
            />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}