import { useLanguage } from "../LanguageContext";

const TrustUs: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section>
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
    py-4 mb-8"
      >
        {translations.trustUs.headerTrustUs}
      </h2>
      <p className="px-8 mb-4 lg:text-2xl">
        {translations.trustUs.p1}
        <span className="font-semibold">{translations.spanText}</span>
      </p>
      <div className="px-8 leading-[1.6] lg:text-2xl mb-8">
        <p className="mb-2">{translations.trustUs.p2}</p>
        <p className="mb-2">{translations.trustUs.p3}</p>
        <p>{translations.trustUs.p4}</p>
      </div>
    </section>
  );
};

export default TrustUs;
