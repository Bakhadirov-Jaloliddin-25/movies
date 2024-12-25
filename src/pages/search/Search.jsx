import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { ReactTyped } from "react-typed";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/api";
import Movies from "@/components/movies/Movies";
import { useSearchParams } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";

const Search = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchparams.get("q") || "");
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["movie"],
    queryFn: () =>
      request
        .get("/search/movie", {
          params: {
            query: searchValue,
          },
        })
        .then((res) => res.data),
  });

  const handleSearch = (e) => {
    e.preventDefault();
    queryClient.invalidateQueries({ queryKey: ["movie"] });
    setSearchParams({ q: searchValue });
  };

  const handleClear = () => {
    setSearchParams({});
    setSearchValue("");
  };

  useEffect(() => {
    if (!searchValue) {
      queryClient.invalidateQueries({ queryKey: ["movie"] });
    }
  }, [searchValue]);

  return (
    <div className="bg-white dark:bg-black duration-300 min-h-screen">
      <div className="container py-10">
        <form
          onSubmit={handleSearch}
          className="max-w-[800px] mx-auto flex items-center shadow-lg rounded-md bg-gray-100 dark:bg-gray-800 overflow-hidden"
        >
          <ReactTyped
            strings={["Avengers", "Venom", "Avatar", "Spiderman"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
            className="flex-1"
          >
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="h-12 px-4 w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white outline-none duration-300"
              type="text"
            />
          </ReactTyped>
          <div className="flex justify-self-center items-center">
            {searchValue.length ? (
              <button
                type="button"
                onClick={handleClear}
                className="h-12 w-12 bg-red-500 text-white flex items-center justify-center hover:bg-red-800 transition duration-300"
              >
                <TiDeleteOutline size={24} />
              </button>
            ) : null}
            <button
              type="submit"
              className="h-12 w-12 bg-slate-300 text-black flex items-center justify-center hover:bg-slate-600 hover:text-white transition duration-300"
            >
              <CiSearch size={24} />
            </button>
          </div>
        </form>

        <div className="mt-8">
          {!data?.total_results ? (
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
              Movie not found.
            </p>
          ) : (
            <Movies data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
