import { useState } from "react";

const NavBar: React.FC = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const navItems: string[] = ["O nas", "Usługi", "Kontakt"];

  function showMenu() {
    setMenuIsVisible(!menuIsVisible);
  }

  return (
    <div className="flex relative">
      <button
        className={`w-12 h-12 flex flex-col gap-2 justify-center absolute right-0 top-1/2 -translate-y-1/2 z-40 md:hidden`}
        onClick={showMenu}
      >
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible ? "rotate-45 translate-y-2 bg-mainYellow" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-full h-1.5 bg-mainBlack rounded-full transition-all duration-300 ${
            menuIsVisible ? "-rotate-45 -translate-y-2 bg-mainYellow" : ""
          }`}
        ></div>
      </button>

      <nav
        className={`${
          menuIsVisible ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-auto h-screen md:h-auto bg-mainBlack md:bg-transparent shadow-2xl md:shadow-none transition-transform duration-500 md:flex md:relative md:translate-x-0 z-30`}
      >
        <ul className="flex flex-col md:flex-row gap-14 items-center justify-center w-full py-12 md:py-0">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="tracking-[2px] text-xl md:text-xl font-semibold text-mainYellow md:text-mainBlack px-6 py-2 rounded-full hover:bg-mainBlack hover:text-mainYellow hover:cursor-pointer transition-all duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
