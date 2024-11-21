const TrustUs: React.FC = () => {
  return (
    <section>
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
    py-4 mb-8"
      >
        Dlaczego warto nam zaufać?
      </h2>
      <p className="px-8 mb-4 lg:text-2xl">
        Witamy w <span className="font-semibold">Auto-Partner Atzendorf</span>!
      </p>
      <div className="px-8 leading-[1.6] lg:text-2xl mb-8">
        <p className="mb-2">
          Zadbamy o Twoje opony i samochód, jak o nasze własne. Twoje auto jest
          u nas w najlepszych rękach, a szeroka oferta opon renomowanych marek
          to gwarancja bezpieczeństwa i komfortu na drodze.
        </p>
        <p className="mb-2">
          Dbamy o najwyższą jakość obsługi, zapewniając fachowe doradztwo i
          indywidualne podejście do każdego klienta.
        </p>
        <p>
          {" "}
          Nasze doświadczenie w branży sprawia, że możesz nam w pełni zaufać,
          niezależnie od tego, czy potrzebujesz wymiany opon, naprawy czy
          sezonowego serwisu. Z nami każda podróż będzie spokojniejsza i
          bezpieczniejsza.
        </p>
      </div>
    </section>
  );
};

export default TrustUs;
