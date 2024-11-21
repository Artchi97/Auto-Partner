import carService from "../assets/car-service.webp";
import tyreService from "../assets/tyre-service.webp";
import tyresSales from "../assets/tyres-sale.webp";
import tyreIcon from "../assets/tyre-icon.svg";
import repairIcon from "../assets/repair-svgrepo-com.svg";
import moneyIcon from "../assets/money-bag-svgrepo-com.svg";

import ServiceBox from "./ServiceBox";

interface idProp {
  id: string;
}

const Services: React.FC<idProp> = ({ id }) => {
  return (
    <div id={id} className="mb-12 mt-16">
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
      py-4 mb-12 mt-8"
      >
        Usługi
      </h2>
      <div className="flex flex-col w-4/5 sm:w-3/5 md:w-full xl:w-4/5 md:justify-center gap-8 md:flex-row items-start mx-auto md:gap-4 md:px-4 2xl:gap-16 2xl:px-16">
        <ServiceBox
          icon={tyreIcon}
          iconAlt="tyres service"
          service="Serwis opon"
          serviceImg={tyreService}
          serviceImgAlt="tyres service"
          serviceContent="Oferujemy Państwu osobiste i indywidualne doradztwo dla samochodów osobowych do 3,5 t oraz motocykli. Zapewniamy pełen zakres usług serwisowych, od wymiany i naprawy opon, po ich sezonowe przechowywanie."
        />
        <ServiceBox
          icon={moneyIcon}
          iconAlt="money icon"
          service="Sprzedaż opon"
          serviceImg={tyresSales}
          serviceImgAlt="tyres sales"
          serviceContent="Nasi doświadczeni pracownicy z przyjemnością doradzą, jakie opony najlepiej pasują do Państwa samochodu, uwzględniając zarówno model pojazdu, jak i indywidualne potrzeby. Zajmiemy się nie tylko profesjonalnym doborem opon, ale także ich zamówieniem oraz fachowym montażem. Dbamy o to, aby każdy etap obsługi przebiegał sprawnie i zgodnie z najwyższymi standardami, gwarantując Państwu komfort i bezpieczeństwo na drodze."
        />
        <ServiceBox
          icon={repairIcon}
          iconAlt="repair icon"
          service="Serwis samochodowy"
          serviceImg={carService}
          serviceImgAlt="car service"
          serviceContent="Wkrótce rozszerzymy naszą ofertę o kompleksowy serwis warsztatowy, w ramach którego będziemy oferować szeroki zakres usług, takich jak ogólna inspekcja stanu technicznego samochodów, wymiana olejów, filtrów, klocków i tarcz hamulcowych oraz wiele innych usług związanych z konserwacją i naprawą pojazdów. Naszym celem jest zapewnienie pełnej obsługi, dzięki której Państwa samochód będzie zawsze w doskonałej kondycji. Zapraszamy do skorzystania z naszej oferty!"
        />
      </div>
    </div>
  );
};

export default Services;
