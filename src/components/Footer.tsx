import { useLanguage } from "../LanguageContext";
import { Link } from "react-scroll";

import mail from "../assets/envelope-svgrepo-com (1)-footer.svg";
import phone from "../assets/phone-svgrepo-com-footer.svg";
import facebook from "../assets/facebook-svgrepo-com.svg";
import logo from "../assets/Logo Auto-Partner .webp";

const Footer: React.FC = () => {
  const { translations } = useLanguage();
  const navStyle: string =
    "text-mainYellow mr-4 ml-4 md:mr-6 ml-6 hover:cursor-pointer py-1 px-0 hover:bg-mainYellow hover:text-mainBlack rounded-full transition-all duration-300";

  return (
    <footer className="bg-mainBlack px-2 md:px-8 pt-8 pb-2 relative">
      <nav className="text-mainYellow text-center text-sm md:text-xl xl:text-2xl">
        <Link to="about-us" smooth={true} duration={500}>
          <span className={navStyle}>{translations.nav[0].name}</span>
        </Link>
        |
        <Link to="about-us" smooth={true} duration={500}>
          <span className={navStyle}>{translations.nav[1].name}</span>
        </Link>
        |
        <Link to="contact" smooth={true} duration={500}>
          <span className={navStyle}>{translations.nav[2].name}</span>
        </Link>
      </nav>
      <div className="xl:flex items-center justify-evenly">
        <div className="mt-12 text-center">
          <img
            src={logo}
            alt="logo auto-partner"
            className="w-24 mx-auto mb-8"
          />
          <p className="mb-2 font-bold xl:text-2xl bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text">
            Auto-Partner Jerzy Sulinski
          </p>
          <p className="text-white">Haupstraße 16</p>
          <p className="text-white mb-6">39443 Staßfurt - Atzendorf</p>
          <p className="text-white mb-2 font-semibold">
            {translations.contact.openHoursHeader}
          </p>
          <p className="text-white">
            {translations.contact.monToFri} 9:00 - 17:00
          </p>
          <p className="text-white">{translations.contact.sat} 8:00 - 14:00</p>
        </div>
        <div className="flex flex-col">
          <div className="text-center mx-auto flex items-center gap-6 mt-12">
            <img src={mail} alt="email icon" className="w-12 xl:w-18 mx-auto" />
            <p className="lg:text-xl xxl:text-2xl text-white">
              <a
                href="mailto:info@auto-partner.biz"
                className="hover:text-yellow-600 transition-all duration-300"
              >
                info@auto-partner.biz
              </a>
            </p>
          </div>
          <div className="text-center mx-auto flex items-center gap-6 mt-6">
            <img
              src={phone}
              alt="phone icon"
              className="w-12 xl:w-18 mx-auto mb-2"
            />
            <p className="lg:text-xl xxl:text-2xl text-white">
              <a
                href="tel:+49(0)15259329919"
                className="hover:text-yellow-600 transition-all duration-300"
              >
                +49 (0) 1525 932 9919
              </a>
            </p>
          </div>
          <a
            href="https://www.facebook.com/profile.php?id=61568507917324"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src={facebook}
              alt="facebook logo"
              className="w-14 xl:w-18 mx-auto mt-6 mb-16"
            />
          </a>
        </div>
      </div>
      <p className="text-white text-center text-xs italic xl:mt-24">
        &copy; Copyright 2024 - all rights reserved
      </p>
      <p className="text-xs mt-6 lg:mt-0 text-center lg:absolute lg:bottom-2 lg:right-4 italic text-mainYellow ">
        {translations.createdBy} Artur Wojciechowski -{" "}
        <a className="font-semibold" href="https://github.com/Artchi97">
          https://github.com/Artchi97
        </a>
      </p>
    </footer>
  );
};

export default Footer;
