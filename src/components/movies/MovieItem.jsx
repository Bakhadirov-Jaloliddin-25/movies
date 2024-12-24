import React, { memo, useState, useEffect } from "react";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieItem = ({
  title,
  poster_path,
  vote_average,
  original_language,
  id,
  genre_ids,
}) => {
  const navigate = useNavigate();

  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedItems")) || [];
    const isAlreadySaved = savedData.some((item) => item.id === id);
    setIsSaved(isAlreadySaved);
  }, [id]);

  const toggleSaveItem = () => {
    const savedData = JSON.parse(localStorage.getItem("savedItems")) || [];
    const item = {
      id,
      title,
      poster_path,
      vote_average,
      original_language,
    };

    if (isSaved) {
      const updatedData = savedData.filter((savedItem) => savedItem.id !== id);
      localStorage.setItem("savedItems", JSON.stringify(updatedData));
      setIsSaved(false);
      toast.error(`${title} has been removed from saved items!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "bg-red-600 text-white rounded-md shadow-lg p-4",
        progressClassName: "bg-white",
      });
    } else {
      savedData.push(item);
      localStorage.setItem("savedItems", JSON.stringify(savedData));
      setIsSaved(true);
      toast.success(`${title} has been saved!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "bg-green-600 text-white rounded-md shadow-lg p-4",
        progressClassName: "bg-white",
      });
    }
  };

  return (
    <div className="w-[280px] rounded-xl overflow-hidden flex flex-col items-start mb-10 bg-white text-black dark:bg-black dark:text-white relative">
      <div className="w-full h-[400px]">
        <img
          onClick={() => navigate(`/movie/${id}`)}
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover cursor-pointer rounded-xl"
        />
        <button
          onClick={toggleSaveItem}
          className={`absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-lg ${
            isSaved ? "bg-red-500" : "bg-blue-500"
          } hover:scale-110 hover:${
            isSaved ? "bg-red-800" : "bg-blue-800"
          } hover:shadow-xl`}
        >
          {isSaved ? (
            <span className="text-xl text-white font-bold">
              <FaTrashAlt />
            </span>
          ) : (
            <span className="text-xl text-white font-bold">
              <CiBookmarkPlus />
            </span>
          )}
        </button>
      </div>
      <div className="mt-3 pl-1">
        <h3 className="text-lg font-bold line-clamp-1">
          {title} - {original_language.toUpperCase()}
        </h3>
        <p className="text-sm mt-1 text-start">Rating: {vote_average}</p>
      </div>
    </div>
  );
};

export default memo(MovieItem);
