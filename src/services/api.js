import axios from "axios";

const fetchPhotos = async (query) => {
  const API_KEY = "lfyP73mfHILzu2C-oFJmdLgJm9tc0LVu9oBaiCVj82o";
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${API_KEY}`,
    },
    params: {
      query,
    },
  });
  return response.data;
};

export default fetchPhotos;
