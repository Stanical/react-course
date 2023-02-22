import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";
import searchImages from "./api";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    console.log("do a search with", term);
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
