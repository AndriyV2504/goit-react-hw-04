import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchPhotos from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchPhotos(query);
        setImages(response.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages;
  }, [query]);
  return (
    <div>
      <SearchBar onSubmit={setQuery} />
      <ImageGallery images={images} />
      {loading && <Loader />}
      {error && <h2>ERROR!!!</h2>}
    </div>
  );
};

export default App;
