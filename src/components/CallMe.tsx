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
      <p className="mb-6 text-xl xl:text-2xl px-4">
        {translations.headerQuestion}
      </p>
      <button
        className={`group transition-all duration-300 text-center px-12 py-2 rounded-full text-xl xl:text-2xl border-2 border-mainBlack ${textColor} font-bold hover:shadow-xl hover:bg-mainBlack ${bgColor}`}
      >
        <span className={`font-bold tracking-wide  `}>
          <a
            href="tel:+49(0)15259329919"
            className={`${others} group-hover:text-mainYellow transition-all duration-300`}
          >
            {translations.call}
          </a>
        </span>
      </button>
    </div>
  );
};

export default CallMe;
