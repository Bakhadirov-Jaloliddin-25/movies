import React from "react";
import "./scroll.css";

const Genre = ({ data, setSelectedGenre, selectedGenre }) => {
  const handleChange = (id) => {
    if (selectedGenre.includes(id)) {
      setSelectedGenre((prev) =>
        prev.filter((selectedId) => selectedId !== id)
      );
    } else {
      setSelectedGenre((prev) => [...prev, id]);
    }
  };
  return (
    <div className="scroll-container overflow-auto container flex gap-3 p-4">
      {data?.map((item) => (
        <div
          onClick={() => handleChange(item.id)}
          key={item.id}
          className={`whitespace-nowrap  bg-primary text-white font-bold rounded-md p-2 px-3 cursor-pointer select-none ${
            selectedGenre.includes(item.id) ? " text-white" : ""
          }`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Genre;
