import Pagination from "@mui/material/Pagination";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Genre from "../../components/genre/Genre";
import Movies from "../../components/movies/Movies";
import { ScaleLoader } from "react-spinners";
import { request } from "../../api";
import "./Pagination.css";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const {
    data: genres,
    isLoading: genresLoading,
    error: genresError,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      request.get("/genre/movie/list").then((res) => res.data.genres),
  });

  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useQuery({
    queryKey: ["movies", page, selectedGenre],
    queryFn: () =>
      request("/discover/movie", {
        params: {
          page,
          without_genres: "18,10749,99",
          with_genres: selectedGenre.join(","),
        },
      }).then((res) => res.data),
    keepPreviousData: true,
  });

  const handleChange = (event, value) => {
    setPage(value);
  };

  const isDarkMode = document.documentElement.classList.contains("dark");

  if (genresLoading || moviesLoading)
    return (
      <div className="flex justify-center items-center min-h-[748px] bg-white dark:bg-black">
        <ScaleLoader color="#ff0000" size={150} />
      </div>
    );

  if (genresError || moviesError)
    return (
      <p className="text-center">Error loading data. Please try again later.</p>
    );

  return (
    <div className="bg-white dark:bg-black duration-300">
      <Genre
        selectedGenre={selectedGenre}
        data={genres}
        setSelectedGenre={setSelectedGenre}
      />
      <Movies data={movies} />

      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={movies?.total_pages <= 500 ? movies.total_pages : 500}
          className={isDarkMode ? "pagination-dark" : "pagination-light"}
        />
      </div>
    </div>
  );
};

export default Movie;
