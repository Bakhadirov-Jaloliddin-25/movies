import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import { ReactTyped } from "react-typed";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { request } from "@/api";
import Movies from "@/components/movies/Movies";
import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("q") || "";
  const [searchValue, setSearchValue] = useState(initialSearch);
  const queryClient = useQueryClient();

  const delayedSearch = debounce((value) => {
    setSearchParams(value ? { q: value } : {});
  }, 500);

  useEffect(() => {
    delayedSearch(searchValue);
    return () => delayedSearch.cancel();
  }, [searchValue]);

  const { data, isFetching } = useQuery({
    queryKey: ["movie", searchValue],
    queryFn: () =>
      searchValue
        ? request
            .get("/search/movie", { params: { query: searchValue } })
            .then((res) => res.data)
        : Promise.resolve(null),
    enabled: !!searchValue,
  });

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-black">
      <div className="container py-10">
        <div className="max-w-[700px] mx-auto flex items-center shadow-lg rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
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
              className="h-12 px-5 w-full bg-transparent text-gray-900 dark:text-white outline-none placeholder-gray-500 dark:placeholder-gray-400"
              type="text"
            />
          </ReactTyped>

          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="h-12 w-12 text-gray-500 dark:text-gray-400 flex items-center justify-center hover:text-red-500 transition duration-300"
            >
              <TiDeleteOutline size={26} />
            </button>
          )}

          <button className="h-12 w-12 bg-primary text-white flex items-center justify-center rounded-r-full hover:bg-red-800 transition duration-300">
            <CiSearch size={26} />
          </button>
        </div>

        <div className="mt-8">
          {isFetching ? (
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
              Searching...
            </p>
          ) : !data?.total_results ? (
            <p className="text-center text-lg text-gray-600 dark:text-gray-300">
              No movies found.
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
