import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const MovieItem = ({
  title,
  poster_path,
  vote_average,
  original_language,
  id,
  genre_ids,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-[280px] rounded-xl overflow-hidden flex flex-col items-start mb-10 bg-white text-black dark:bg-black dark:text-white">
      <div className="w-full h-[400px]">
        <img
          onClick={() => navigate(`/movie/${id}`)}
          src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
          alt={title}
          className="w-full h-full object-cover cursor-pointer rounded-xl"
        />
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
