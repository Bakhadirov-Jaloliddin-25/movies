import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Pagination from "@mui/material/Pagination";
import Genre from "../../components/genre/Genre";

const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    request.get("/genre/movie/list").then((res) => setGenres(res.data.genres));
  }, []);

  useEffect(() => {
    request("/discover/movie", {
      params: {
        page,
        without_genres: "18,10749, 99",
        with_genres: selectedGenre.join(","),
      },
    }).then((res) => {
      setData(res.data);
    });
  }, [page, selectedGenre]);

  return (
    <div className="bg-white dark:bg-black">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel data={data} />
      <Genre
        selectedGenre={selectedGenre}
        data={genres}
        setSelectedGenre={setSelectedGenre}
      />
      <Movies data={data} />
      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data.total_pages : 500}
          className="bg-primary text-black dark:text-white rounded-xl"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "inherit",
              fontWeight: "bold",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "white",
              color: "red",
            },
          }}
        />
      </div>
    </div>
  );
};

export default memo(Home);
