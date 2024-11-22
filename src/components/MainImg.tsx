import { useLanguage } from "../LanguageContext";
import mainImg from "../assets/pexels-tima-miroshnichenko-5640639.jpg";

const MainImg: React.FC = () => {
  const { translations } = useLanguage();

  if (!translations || !translations.mainTitle) {
    return null;
  }

  return (
    <div
      style={{ backgroundImage: `url(${mainImg})` }}
      className="bg-cover bg-center w-full h-60 md:h-96 mt-8 sm:mt-0 relative"
    >
      <div className="absolute w-full h-full bg-black opacity-35"></div>

      <div className="flex items-center justify-center absolute w-full h-full px-8 xl:px-12">
        <p className="font-oswald font-semibold italic animate-pulse-text text-xl md:text-3xl lg:text-5xl  text-center leading-[1.4] xl:leading-[1.5] bg-gradient-to-r from-white to-yellow-100 text-transparent bg-clip-text">
          {translations.mainTitle}
        </p>
      </div>
    </div>
  );
};

export default MainImg;
