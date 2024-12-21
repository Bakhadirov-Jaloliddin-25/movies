import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdLocalMovies,
  MdTheaterComedy,
  MdSportsSoccer,
  MdEvent,
} from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { PiStarFour } from "react-icons/pi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import logo from "@/assets/images/logo1.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <div className="flex space-x-2 items-center mb-4">
            <div className="">
              <img
                src={logo}
                alt="logo"
                className="w-[55px] h-9 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
          <div className="mb-4">
            <a
              href="https://play.google.com/store/apps/details?id=ru.kinopoisk"
              className="block mb-2"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
            <a
              href="https://apps.apple.com/ru/app/%D0%BA%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/id477718890"
              className="block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36 cursor-pointer hover:opacity-75"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">About us</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <IoDocumentTextSharp className="text-red-500 mr-2" />
              Public offer
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <PiStarFour className="text-red-500 mr-2" />
              Advertising
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <FaRegCircleQuestion className="text-red-500 mr-2" />
              F.A.Q
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <FiPhone className="text-red-500 mr-2" />
              Contacts
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdLocalMovies className="text-red-500 mr-2" /> Movie
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdTheaterComedy className="text-red-500 mr-2" /> Theatre
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer mb-1 flex items-center">
              <MdEvent className="text-red-500 mr-2" /> Concerts
            </li>
            <li className="hover:underline hover:text-red-500 cursor-pointer flex items-center">
              <MdSportsSoccer className="text-red-500 mr-2" /> Sport
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact us</h3>
          <p className="text-red-500 mb-4 cursor-pointer hover:underline hover:text-red-600">
            +998 (95) 897-33-38
          </p>
          <h3 className="text-lg font-semibold mb-3">Social media</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/kinopoisk/?hl=ru">
              <FaInstagram className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            </a>
            <a href="https://www.facebook.com/kinopoisk/">
              <FaFacebookF className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            </a>
            <a href="https://www.youtube.com/channel/UC4tlrTXCBw6NPZ9nCA3_s9w">
              <FaYoutube className="text-red-500 text-2xl cursor-pointer hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
