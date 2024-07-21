import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import fetchPhotos from "../services/api";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./ImageModal/ImageModal";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectImage("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchImages = async () => {
      if (!query) {
        return;
      }

      try {
        setLoading(true);
        setError(false);
        const response = await fetchPhotos(query, page, 8);
        setImages((prev) => [...prev, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {selectImage && (
        <ImageModal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          image={selectImage}
        />
      )}
    </div>
  );
};

export default App;
