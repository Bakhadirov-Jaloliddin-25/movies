import React, { memo, useState, useEffect } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const MovieItem = ({
  title,
  poster_path,
  vote_average,
  original_language,
  id,
}) => {
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const savedData = JSON.parse(localStorage.getItem("savedItems")) || [];
      setIsSaved(savedData.some((item) => item.id === id));
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
    }
  }, [id]);

  const toggleSaveItem = () => {
    try {
      const savedData = JSON.parse(localStorage.getItem("savedItems")) || [];
      let updatedData;

      if (isSaved) {
        updatedData = savedData.filter((savedItem) => savedItem.id !== id);
      } else {
        updatedData = [
          ...savedData,
          { id, title, poster_path, vote_average, original_language },
        ];
      }

      localStorage.setItem("savedItems", JSON.stringify(updatedData));
      setIsSaved(!isSaved);
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  };

  return (
    <div className="w-[280px] rounded-xl overflow-hidden flex flex-col items-start mb-10 bg-white text-black dark:bg-black dark:text-white relative group">
      <div className="w-full h-[400px] relative">
        <img
          onClick={() => navigate(`/movie/${id}`)}
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover cursor-pointer rounded-xl"
        />
        <button
          onClick={toggleSaveItem}
          className="absolute top-3 right-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-md min-[768px]:opacity-0 group-hover:opacity-100 hover:shadow-lg"
        >
          {isSaved ? (
            <IoBookmark className="text-white text-2xl transition-transform duration-200" />
          ) : (
            <CiBookmarkPlus className="text-white text-2xl transition-transform duration-200" />
          )}
        </button>
      </div>
      <div className="mt-3 pl-1">
        <h3 className="text-lg font-bold truncate">
          {title} - {original_language.toUpperCase()}
        </h3>
        <p className="text-sm mt-1 text-start">Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
