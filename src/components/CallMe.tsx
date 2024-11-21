interface CallMeProps {
  bgColor: string;
  textColor?: string;
  others?: string;
}

const CallMe: React.FC<CallMeProps> = ({ bgColor, textColor, others }) => {
  return (
    <div className="flex flex-col items-center justify-items-center self-center text-center text-base">
      <p className="mb-6 text-xl xl:text-2xl">
        Masz pytania? Skontaktuj się z nami!
      </p>
      <button
        className={`text-center px-12 py-2 rounded-full text-xl xl:text-2xl border-2 border-mainBlack ${textColor} font-bold hover:shadow-xl hover:bg-mainBlack hover:text-mainYellow transition-all duration-300 ${bgColor}`}
      >
        <span
          className={`${others} hover:text-mainYellow transition-all duration-300 tracking-wide`}
        >
          Zadzwoń
        </span>
      </button>
    </div>
  );
};

export default CallMe;
