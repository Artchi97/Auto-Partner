import { useLanguage } from "../LanguageContext";
import logo from "../assets/Logo Auto-Partner .webp";

const FallbackComponent: React.FC = () => {
  const { translations } = useLanguage();
  return (
    <div className="bg-mainBlack w-screen h-screen flex flex-col items-center justify-center justify-items-center">
      <img src={logo} alt="Auto-Partner logo" className="w-1/4 mx-auto mb-12" />
      <p className="font-oswald italic animate-pulse-text text-lg md:text-xl lg:text-2xl  text-center leading-[1.4] xl:leading-[1.5] bg-gradient-to-r from-white to-yellow-100 text-transparent bg-clip-text">
        {translations.fallback}
      </p>
    </div>
  );
};

export default FallbackComponent;
