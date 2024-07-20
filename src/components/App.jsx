import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos"
        );
        setImages(response.data.images);
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
