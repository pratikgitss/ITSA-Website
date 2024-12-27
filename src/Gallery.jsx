import React, { useState, useEffect } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import mediaItemsData from './data/galleryItems';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allItems = Object.values(mediaItemsData).flat(); 
  const [mediaItems, setMediaItems] = useState(mediaItemsData);

  // Automatic slider setup
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allItems.length);
    }, 1000); 

    return () => clearInterval(interval);
  }, [allItems.length]);

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? allItems.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % allItems.length);
  };

  const handleLike = (id) => {
    // Update the media item with the given id
    setMediaItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, likes: (item.likes || 0) + 1 }
          : item
      )
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="title-font mb-4 text-center text-5xl font-bold text-teal-600 sm:text-3xl">Gallery and Highlights</h2>

      {/* Top Slider */}
      <div className="relative rounded-lg shadow-lg overflow-hidden bg-white mb-8">
        {allItems[currentIndex].type === 'image' ? (
          <img src={allItems[currentIndex].src} alt={allItems[currentIndex].caption} className="w-full h-64 object-cover" />
        ) : (
          <video src={allItems[currentIndex].src} controls className="w-full h-64 object-cover" />
        )}

        <button onClick={handlePrev} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-700 text-2xl bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <FaChevronLeft />
        </button>
        <button onClick={handleNext} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 text-2xl bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
          <FaChevronRight />
        </button>
      </div>

      {/* Sections */}
      {Object.keys(mediaItemsData).map((section) => (
        <div key={section} className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 capitalize">{section}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {mediaItemsData[section].map((item) => (
              <div key={item.id} className="relative rounded-lg overflow-hidden shadow-lg">
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.caption} className="w-full h-48 object-cover" />
                ) : (
                  <video src={item.src} controls className="w-full h-48 object-cover" />
                )}
                <div className="p-2">
                  <p className="text-sm font-semibold">{item.caption}</p>
                  <button
                    onClick={() => handleLike(item.id)}
                    className="flex items-center space-x-1 text-pink-500 mt-2"
                  >
                    <FaHeart />
                    <span>{item.likes || 0}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
