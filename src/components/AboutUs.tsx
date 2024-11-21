import barum from "../assets/logo/barum-logo.webp";
import bfgoodrich from "../assets/logo/bfgoodrich-logo.webp";
import bridgestone from "../assets/logo/bridgestone-logo.webp";
import continental from "../assets/logo/continental-logo.webp";
import debica from "../assets/logo/debica-logo.webp";
import dunlop from "../assets/logo/dunlop-logo.webp";
import falken from "../assets/logo/falken-logo.webp";
import firestone from "../assets/logo/firestone-logo.webp";
import goodyear from "../assets/logo/goodyear-logo.webp";
import kleber from "../assets/logo/kleber-logo.webp";
import kormoran from "../assets/logo/kormoran-logo.webp";
import kumho from "../assets/logo/kumho-logo.webp";
import nokian from "../assets/logo/nokian-logo.webp";
import pirelli from "../assets/logo/pirelli-logo.webp";
import semperit from "../assets/logo/semperit-logo.webp";
import yokohama from "../assets/logo/yokohama-logo.webp";

interface idProp {
  id: string;
}

const AboutUs: React.FC<idProp> = ({ id }) => {
  const logos = [
    barum,
    bfgoodrich,
    bridgestone,
    continental,
    debica,
    dunlop,
    falken,
    firestone,
    goodyear,
    kleber,
    kormoran,
    kumho,
    nokian,
    pirelli,
    semperit,
    yokohama,
  ];

  return (
    <section id={id}>
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
      py-4 mb-8"
      >
        O nas
      </h2>
      <div className="px-8 leading-[1.6] lg:text-2xl">
        <p className="mb-2">
          Jesteśmy nowym, dynamicznie rozwijającym się zakładem na rynku
          oponiarskim. Nasza nowoczesna siedziba mieści się w Staßfurt-Atzendorf
          przy Hauptstraße 16, gdzie każdego dnia łączymy zaawansowaną
          technologię z indywidualnym podejściem do każdego klienta.
        </p>
        <p className="mb-2">
          Nasza młoda i ambitna drużyna to wykwalifikowani fachowcy, którzy
          pracują na najnowocześniejszym sprzęcie, nieustannie doskonaląc swoje
          umiejętności. Dzięki temu możemy zaoferować najwyższą jakość usług
          oraz pełne wsparcie w każdej sytuacji.
        </p>
        <p className="mb-2">
          {" "}
          Dbamy o to, by spełniać potrzeby naszych klientów – zarówno pod
          względem usług, jak i cen. Jakość oraz zadowolenie klienta zawsze
          stawiamy na pierwszym miejscu.{" "}
        </p>
        <p>
          Zapraszamy serdecznie, by przekonać się o tym osobiście. Czekamy na
          Ciebie w <span className="font-bold">Auto-Partner Atzendorf</span>!{" "}
        </p>
      </div>
      <div className="px-8 leading-[1.6] lg:text-2xl">
        <h3 className="mt-8 mb-8 font-bold">
          W naszej ofercie znajdziesz opony pochodzące od wiodących producentów,
          m. in.:
        </h3>
        <div className="flex flex-wrap gap-6 justify-around items-center">
          {logos.map((logo) => (
            <img src={logo} alt={`${logo} logo`} className="w-1/4 xl:w-1/5" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
