import { useLanguage } from "../LanguageContext";

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
  const { translations } = useLanguage();

  return (
    <div id={id} className="mb-12 mt-16">
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
      py-4 mb-12 mt-8"
      >
        {translations.services.headerServices}
      </h2>
      <div className="flex flex-col w-4/5 sm:w-3/5 md:w-full xl:w-4/5 md:justify-center gap-8 md:flex-row items-start mx-auto md:gap-4 md:px-4 2xl:gap-16 2xl:px-16">
        <ServiceBox
          icon={tyreIcon}
          iconAlt="tyres service"
          service={translations.services.headerTyreService}
          serviceImg={tyreService}
          serviceImgAlt="tyres service"
          serviceContent={translations.services.tyreServiceDesc}
        />
        <ServiceBox
          icon={moneyIcon}
          iconAlt="money icon"
          service={translations.services.headerTyreSales}
          serviceImg={tyresSales}
          serviceImgAlt="tyres sales"
          serviceContent={translations.services.tyreSalesDesc}
        />
        <ServiceBox
          icon={repairIcon}
          iconAlt="repair icon"
          service={translations.services.headerCarService}
          serviceImg={carService}
          serviceImgAlt="car service"
          serviceContent={translations.services.carServiceDesc}
        />
      </div>
    </div>
  );
};

export default Services;
