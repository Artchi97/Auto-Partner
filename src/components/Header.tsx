import logo from "../assets/Logo Auto-Partner .webp";
import CallMe from "./CallMe";
import NavBar from "./NavBar";
import gbflag from "../assets/gb.svg";

const Header: React.FC = () => {
  return (
    <header className="bg-mainYellow w-full h-36 lg:h-40 2xl:h-48 flex justify-between px-6 relative">
      <div className="absolute top-2 right-2 flex gap-3 md:gap-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5 3"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <rect width="5" height="1" y="0" fill="#000000" />
          <rect width="5" height="1" y="1" fill="#DD0000" />
          <rect width="5" height="1" y="2" fill="#FFCE00" />
        </svg>
        <img
          src={gbflag}
          alt="great britain flag"
          className="w-6 h-6 md:w-10 md:h-10"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 6 4"
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <rect width="6" height="2" fill="#ffffff" />

          <rect width="6" height="2" y="2" fill="#dc143c" />
        </svg>
      </div>
      <img src={logo} alt="logo auto-partner" className="h-5/6" />
      <div className="flex justify-items-center items-center hidden 2xl:flex">
        <CallMe bgColor="" />
      </div>

      <NavBar />
    </header>
  );
};

export default Header;
