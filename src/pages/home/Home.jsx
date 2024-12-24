import { useQuery } from "@tanstack/react-query";
import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import React, { memo } from "react";
import { Helmet } from "react-helmet";
import { ScaleLoader } from "react-spinners";

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => request.get("/discover/movie").then((res) => res.data),
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[80vh] bg-white dark:bg-black">
        <ScaleLoader color="#ff0000" size={150} />
      </div>
    );
  }

  if (error) {
    return <div>Error loading movies. Please try again later.</div>;
  }

  return (
    <div className="bg-white dark:bg-black duration-300">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel data={data} />
      <Movies data={data} />
    </div>
  );
};

export default memo(Home);
