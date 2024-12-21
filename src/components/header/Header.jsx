import React, { useState } from "react";
import logo from "@/assets/images/logo.svg";
import active_header1 from "@/assets/images/header1-active.svg";
import header2 from "@/assets/images/header2.svg";
import header3 from "@/assets/images/header3.svg";
import header4 from "@/assets/images/header4.svg";
import { useNavigate } from "react-router-dom";

const lang = [
  {
    label: "Eng",
    value: "en",
  },
  {
    label: "Ру",
    value: "ru",
  },
  {
    label: "Uz",
    value: "uzb",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } sticky top-0 left-0 z-10`}
    >
      <div
        className={`container flex flex-wrap items-center justify-around py-4 `}
      >
        <div className="w-[112px] h-[36px]">
          <img
            onClick={() => navigate("/")}
            className="w-full h-full cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        <ul className="flex w-[250px] flex-wrap justify-between">
          <li className="flex flex-wrap flex-col items-center cursor-pointer">
            <img src={active_header1} className="text-[20px] text-primary" />
            <span className="text-primary">Poster</span>
          </li>
          <li className="flex flex-wrap flex-col items-center cursor-pointer">
            <img src={header2} className="text-[20px] text-[#A1A1A1]" />
            <span className="text-[#A1A1A1]">Sessions</span>
          </li>
          <li className="flex flex-wrap flex-col items-center cursor-pointer">
            <img src={header3} className="text-[20px] text-[#A1A1A1]" />
            <span className="text-[#A1A1A1]">Tickets</span>
          </li>
          <li className="flex flex-wrap flex-col items-center cursor-pointer">
            <img src={header4} className="text-[20px] text-[#A1A1A1]" />
            <span className="text-[#A1A1A1]">Search</span>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <select className="h-full bg-slate-900 px-3 py-2 rounded-md text-white">
            {lang.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <button className="w-[180px] h-[56px] bg-red-700 text-white py-3 rounded-[12px]">
            Login
          </button>
          <button
            onClick={toggleDarkMode}
            className={`w-[56px] h-[56px] flex items-center justify-center rounded-full bg-gray-600`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
