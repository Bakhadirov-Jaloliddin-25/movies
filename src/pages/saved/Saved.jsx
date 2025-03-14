import React from "react";
import { ScaleLoader } from "react-spinners";
import MovieItem from "../../components/movies/MovieItem";
import { useSelector } from "react-redux";

const SavedPage = () => {
  const savedItems = useSelector((state) => state.savedMovies.savedMovies);

  return (
    <div className="bg-white dark:bg-black duration-300 pt-24">
      <div className="container py-6">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Saved Movies
        </h1>

        {savedItems.length === 0 ? (
          <p className="text-center text-lg text-gray-500 dark:text-white min-h-[47.9vh]">
            No saved movies found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {savedItems.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedPage;
