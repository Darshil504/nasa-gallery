import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "../components/ImageCard";
import SearchBar from "../components/SearchBar";
import "../styles.css";

const API_KEY = "znn7flw8ThdShrCxQWnf6iva9MQA347xlOlk40T9"
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${znn7flw8ThdShrCxQWnf6iva9MQA347xlOlk40T9}&count=10`;

const Home = () => {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaType, setMediaType] = useState("all");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(API_URL);
      setImages(response.data);
      setFilteredImages(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterImages(term, mediaType);
  };

  const handleFilter = (type) => {
    setMediaType(type);
    filterImages(searchTerm, type);
  };

  const filterImages = (term, type) => {
    let filtered = images.filter((img) =>
      img.title.toLowerCase().includes(term.toLowerCase())
    );

    if (type !== "all") {
      filtered = filtered.filter((img) => img.media_type === type);
    }

    setFilteredImages(filtered);
  };

  return (
    <div className="home-container">
      <h1 className="title">🚀 NASA Astronomy Gallery</h1>

      <SearchBar onSearch={handleSearch} onFilter={handleFilter} />

      <div className="gallery">
        {filteredImages.map((img) => (
          <ImageCard key={img.date} image={img} />
        ))}
      </div>
    </div>
  );
};

export default Home;
