import axios from "axios";

const fetchPhotos = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos");
  return response.data;
};

export default fetchPhotos;
