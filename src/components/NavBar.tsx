import { useState } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "../LanguageContext";

const NavBar: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const { translations } = useLanguage();

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  return (
    <div className="flex relative">
      <button
        className={`${
          menuIsVisible ? "w-8 h-8" : "w-12 h-12"
        }  flex flex-col gap-2 justify-center absolute right-0 top-1/2 -translate-y-1/2 z-40 md:hidden`}
        onClick={showMenu}
      >
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible
              ? "rotate-45 translate-y-3 bg-mainYellow opacity-60 h-1"
              : ""
          }`}
        ></div>
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible
              ? "-rotate-45 -translate-y-3.5 bg-mainYellow opacity-60 h-1"
              : ""
          }`}
        ></div>
      </button>

      <nav
        className={`${
          menuIsVisible ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-full md:w-1/2 md:w-auto h-screen md:h-auto bg-mainBlack md:bg-transparent shadow-2xl md:shadow-none transition-transform duration-500 md:flex md:relative md:translate-x-0 z-30`}
      >
        <ul className="flex flex-col md:flex-row gap-14 items-center justify-center w-full py-32 md:py-0">
          {translations.nav.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              onClick={showMenu}
            >
              <li className="tracking-[2px] text-xl font-semibold md:text-xl text-mainYellow md:text-mainBlack px-6 py-2 rounded-full hover:bg-mainBlack hover:text-mainYellow hover:cursor-pointer transition-all duration-300">
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
