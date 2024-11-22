import { useLanguage } from "../LanguageContext";

interface CallMeProps {
  bgColor: string;
  textColor?: string;
  others?: string;
}

const CallMe: React.FC<CallMeProps> = ({ bgColor, textColor, others }) => {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-items-center self-center text-center text-base">
      <p className="mb-6 text-xl xl:text-2xl px-2">
        {translations.headerQuestion}
      </p>
      <a href="tel:+49(0)15259329919">
        <button
          className={`text-center  rounded-full text-xl xl:text-2xl border-2 border-mainBlack ${textColor} font-bold hover:shadow-xl  hover:bg-mainBlack transition-all ${bgColor}`}
        >
          <span
            className={`font-bold tracking-wide block w-full h-full hover:text-mainYellow px-16 py-2 transition-all duration-300 ${others}`}
          >
            {translations.call}
          </span>
        </button>
      </a>
    </div>
  );
};

export default CallMe;
