import React from "react";
import { RiCoupon3Line } from "react-icons/ri";
import { MdOutlineVibration } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import logo from "@/assets/images/logo.svg";
import active_header1 from "@/assets/images/header1-active.svg";
import header2 from "@/assets/images/header2.svg";
import header3 from "@/assets/images/header3.svg";
import header4 from "@/assets/images/header4.svg";

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
  return (
    <div className="container flex flex-wrap items-center justify-around py-4">
      <div className="w-[112px] h-[36px]">
        <img className="w-full h-full" src={logo} alt="" />
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
      <div className="flex gap-2 items-center">
        <select className="h-full bg-slate-900 px-2 py-2 rounded-md text-white">
          {lang.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <button className="w-[180px] h-[56px] bg-red-700 text-white py-3 rounded-[12px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
