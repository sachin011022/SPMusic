import axios from "axios";

export const fetchDataSearch = async (value: string) => {
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/search`,
    params: { q: value },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_APP_RAPID_API_KEY,
      "x-rapidapi-host": import.meta.env.VITE_APP_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const usefetchData = async (value: string, id: string) => {
  const options = {
    method: "GET",
    url: `https://deezerdevs-deezer.p.rapidapi.com/${value}/${id}`,

    headers: {
      "x-rapidapi-key": import.meta.env.VITE_APP_RAPID_API_KEY,
      "x-rapidapi-host": import.meta.env.VITE_APP_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
