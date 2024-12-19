import React, { memo } from "react";

const MovieItem = ({ title, poster_path, vote_average, original_language }) => {
  return (
    <div className="rounded-xl">
      <img
        src={`${import.meta.env.VITE_IMAGE_URL}${poster_path}`}
        alt=""
        className="w-[280px] h-[400px] rounded-xl"
      />
      <h3 className="bg-black text-white ">
        {title} - {original_language.toUpperCase()}
      </h3>
      <p className="bg-black text-white">{vote_average}</p>
    </div>
  );
};

export default memo(MovieItem);
