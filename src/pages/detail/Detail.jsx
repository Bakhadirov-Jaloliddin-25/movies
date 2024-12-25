import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { request } from "../../api";
import imdb from "../../assets/images/imdb.svg";
import kinopoisk from "../../assets/images/kinopoisk.svg";
import Movies from "../../components/movies/Movies";
import { Helmet } from "react-helmet";
import { ScaleLoader } from "react-spinners";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => request.get(`/movie/${id}`).then((res) => res.data),
    enabled: !!id,
  });

  const { data: similar, isLoading: similarLoading } = useQuery({
    queryKey: ["similar", id],
    queryFn: () => request.get(`/movie/${id}/similar`).then((res) => res.data),
    enabled: !!id,
  });

  const { data: credits, isLoading: creditsLoading } = useQuery({
    queryKey: ["credits", id],
    queryFn: () => request.get(`/movie/${id}/credits`).then((res) => res.data),
    enabled: !!id,
  });

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m / ${minutes} minutes`;
  };

  if (isLoading || similarLoading || creditsLoading)
    return (
      <div className="flex justify-center items-center min-h-[70vh] bg-white dark:bg-black">
        <ScaleLoader color="#ff0000" size={150} />
      </div>
    );
  if (error) return <p>Error loading data. Please try again later.</p>;

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="w-[1360px] h-[640px] relative">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path}
            alt=""
          />
          <button
            onClick={() => navigate(-1)}
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary dark:bg-gray-800 active:bg-primary transition duration-300 absolute top-3 left-3 opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              className="w-6 h-6 stroke-primary dark:stroke-white active:stroke-secondary transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="mt-96 absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-2xl md:text-5xl font-bold mb-4">
              {data?.title}
            </h1>
            <p className="text-sm md:text-lg mb-6">
              {new Date(data?.release_date).getFullYear()} •{" "}
              {data?.genres
                .slice(0, 1)
                .map((genre) => genre.name)
                .join(", ")}{" "}
              • {Math.floor(data?.runtime / 60)}h {data?.runtime % 60}m • EN
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-full shadow-lg">
              Buy Ticket
            </button>
          </div>
        </div>
        <div className="detail-list w-[380px] mt-12">
          <div className="first-buttons grid grid-cols-2">
            <button className="bg-[#111111] text-white py-4 px-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
              Tickets
            </button>
            <button className="bg-[#1D1D1D] text-primary py-4 px-2 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-all">
              About the Movie
            </button>
          </div>
          <div className="second-buttons grid grid-cols-2 gap-4 mt-12">
            <button className="flex items-center justify-around border border-[#111111] px-4 rounded-xl text-xl font-[900]">
              {((data?.vote_average / 100) * 90).toFixed(1)}
              <img className="w-20 h-16" src={imdb} alt="" />
            </button>
            <button className="flex items-center justify-around border border-[#111111] px-4 rounded-xl text-xl font-[900]">
              {data?.vote_average?.toFixed(1)}
              <img className="w-20 h-16" src={kinopoisk} alt="" />
            </button>
          </div>
          <div className="Details border-b pb-6 border-[#2D2D2D]">
            <h3 className="mt-12 text-xl">Details</h3>
            <div className="flex flex-wrap justify-between mt-6">
              <p className="text-sm ">Duration</p>
              <p className="text-sm "> {formatTime(data?.runtime)}</p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Premiere</p>
              <p className="text-sm ">
                {new Date(data?.release_date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Production</p>
              <p className="text-sm ">
                {data?.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm flex-1 ">Genre</p>
              <p className="text-sm ">
                {data?.genres
                  .slice(0, 2)
                  .map((genre) => genre.name)
                  .join(", ")}
              </p>
            </div>
            <div className="flex flex-wrap justify-between mt-4">
              <p className="text-sm ">Director</p>
              <p className="text-sm ">
                {credits?.crew
                  .filter((member) => member.job === "Director")
                  .map((director) => director.name)
                  .join(", ") || "Mike Mitchell, Stephanie Stein"}
              </p>
            </div>
          </div>
          <div className="Cast border-b pb-8 border-[#2D2D2D]">
            <h3 className="mt-12 text-xl">Cast</h3>
            {credits?.cast.slice(0, 5).map((member, index) => (
              <div key={index} className="flex flex-wrap justify-between mt-6">
                <p className="text-sm ">{member.name}</p>
                <p className="text-sm ">{member.character}</p>
              </div>
            ))}
          </div>
          <div className="Plot pb-6">
            <h3 className="mt-12 text-xl">Plot</h3>
            <p className="mt-6 text-base">{data?.overview}</p>
          </div>
          <button className="mt-6 mb-10 bg-primary w-full px-6 py-4 rounded-xl text-white">
            Buy Ticket
          </button>
        </div>
      </div>
      <Movies isDetail={true} data={similar} />
    </div>
  );
};

export default Details;
