import React from "react";
import "./scroll.css";

const Genre = ({ data, setSelectedGenre, selectedGenre }) => {
  const handleChange = (id) => {
    setSelectedGenre((prev) =>
      prev.includes(id)
        ? prev.filter((selectedId) => selectedId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="scroll-container overflow-auto container flex gap-3 p-4 pt-28">
      {data?.map((item) => (
        <div
          onClick={() => handleChange(item.id)}
          key={item.id}
          className={`whitespace-nowrap px-4 py-2 rounded-lg shadow-md cursor-pointer select-none transition-colors duration-300
            ${
              selectedGenre.includes(item.id)
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-white text-gray-900 dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
