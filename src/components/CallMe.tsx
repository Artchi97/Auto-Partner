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
      <p className="mb-6 text-xl xl:text-2xl">{translations.headerQuestion}</p>
      <button
        className={`group transition-all duration-300 text-center px-12 py-2 rounded-full text-xl xl:text-2xl border-2 border-mainBlack ${textColor} font-bold hover:shadow-xl hover:bg-mainBlack ${bgColor}`}
      >
        <span
          className={`${others} font-bold tracking-wide group-hover:text-mainYellow `}
        >
          {translations.call}
        </span>
      </button>
    </div>
  );
};

export default CallMe;
