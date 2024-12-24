import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const SavedPage = () => {
  const navigate = useNavigate();

  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedItems")) || [];
    setSavedItems(savedData);
    setLoading(false);
  }, []);

  const removeSavedItem = (id) => {
    const updatedItems = savedItems.filter((item) => item.id !== id);
    setSavedItems(updatedItems);
    localStorage.setItem("savedItems", JSON.stringify(updatedItems));
  };

  return (
    <div className="bg-white dark:bg-black duration-300">
      <div className="container py-6">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Saved Items
        </h1>
        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="flex justify-center items-center min-h-[47.9vh] bg-white dark:bg-black">
              <ScaleLoader color="#ff0000" size={150} />
            </div>
          </div>
        ) : savedItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500 dark:text-white min-h-[47.9vh]">
            No saved items found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  onClick={() => navigate(`/movie/${item.id}`)}
                  src={`${import.meta.env.VITE_IMAGE_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-[350px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Rating: {item.vote_average}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Language: {item.original_language.toUpperCase()}
                  </p>
                </div>

                <button
                  onClick={() => removeSavedItem(item.id)}
                  className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
