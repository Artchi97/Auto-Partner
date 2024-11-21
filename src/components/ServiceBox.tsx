import { useState, useRef } from "react";

interface ServiceBoxProps {
  icon: string;
  iconAlt: string;
  service: string;
  serviceImg: string;
  serviceImgAlt: string;
  serviceContent: string;
}

const ServiceBox: React.FC<ServiceBoxProps> = ({
  icon,
  iconAlt,
  service,
  serviceImg,
  serviceImgAlt,
  serviceContent,
}) => {
  const [showContent, setShowContent] = useState(false);

  const contentRef = useRef<HTMLDivElement | null>(null);

  function toggleContent() {
    setShowContent((prev) => {
      const newShowContent = !prev;
      if (newShowContent && contentRef.current) {
        setTimeout(() => {
          contentRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 250);
      }
      return newShowContent;
    });
  }

  return (
    <div className="rounded-xl flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-mainYellow to-white w-full xl:w-4/5 mx-auto">
      <img src={icon} alt={iconAlt} className="w-14 mt-8" />
      <div className="h-14 px-4">
        <h3 className="font-oswald font-bold text-xl lg:text-2xl text-center">
          {service}
        </h3>
      </div>
      <img
        src={serviceImg}
        alt={serviceImgAlt}
        className="h-40 md:h-48 2xl:h-64 w-full object-cover"
      />
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showContent ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="p-4">{serviceContent}</p>
      </div>
      <button
        className="rounded-full z-10 px-8 py-2 bg-mainBlack text-white mb-6 hover:cursor-pointer hover:text-mainYellow hover:shadow-xl transition-all duration-300"
        onClick={toggleContent}
      >
        {showContent ? "Ukryj" : "Pokaż więcej"}
      </button>
    </div>
  );
};

export default ServiceBox;
