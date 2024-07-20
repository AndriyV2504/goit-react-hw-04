import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchPhotos from "../services/api";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetchPhotos(query);
        setImages(response.images);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImages;
  }, [query]);
  return (
    <div>
      <SearchBar onSubmit={setQuery} />
      <ImageGallery images={images} />
    </div>
  );
};

export default App;
