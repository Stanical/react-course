import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID z6wXtGkH1ajKzfUAikui_uxYnKH66TaV8Hf2xthpIJE",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
