import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchPhotos from "../services/api";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetchPhotos();
        setImages(response.images);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages;
  }, []);
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
