import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.unsplash.com/search/photos")
      .then((res) => setImages(res.data.images))
      .catch();
  }, []);
  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
