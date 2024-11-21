import logoImg from "../assets/Logo Auto-Partner .webp";
import mail from "../assets/envelope-svgrepo-com (1).svg";
import phone from "../assets/phone-svgrepo-com.svg";
import facebook from "../assets/facebook-svgrepo-com.svg";

interface idProp {
  id: string;
}

const Contact: React.FC<idProp> = ({ id }) => {
  return (
    <div id={id}>
      <h2
        className="font-oswald tracking-wide w-full bg-mainBlack text-mainYellow font-bold text-2xl lg:text-3xl text-center
      py-4"
      >
        Kontakt
      </h2>
      <div
        style={{ backgroundImage: `url(${logoImg})` }}
        className="bg-cover bg-center w-full h-96 relative"
      >
        <div className="absolute w-full h-full bg-black opacity-60"></div>

        <div className="text-xl xl:text-2xl xxl:text-3xl absolute w-full px-12 text-center top-1/2 -translate-y-1/2">
          <p className="text-2xl xl:text-4xl xxl:text-5xl mb-2 font-bold bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text">
            Auto-Partner Jerzy Sulinski
          </p>
          <p className="text-white">Hauptstraße 16</p>
          <p className="text-white mb-8">39443 Staßfurt - Atzendorf</p>
          <p className="text-white mb-4 font-bold">Godziny otwarcia:</p>
          <p className="text-white">Pon - Pt 9:00 - 17:00</p>
          <p className="text-white">Sb 8:00 - 14:00</p>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-xl lg:text-3xl xxl:text-4xl text-center mt-8 mb-8">
          Masz pytania? Chętnie pomożemy!
        </h3>
        <div className="flex flex-col xl:flex-row">
          <div className="text-center mx-auto">
            <img
              src={mail}
              alt="email icon"
              className="w-14 xl:w-20 mx-auto mb-2"
            />
            <p className="lg:text-xl xxl:text-2xl">
              <a
                className="mail hover:text-yellow-600 transition-all duration-300"
                href="mailto:info@auto-partner.biz"
              >
                info@auto-partner.biz
              </a>
            </p>
          </div>
          <div className="text-center mx-auto mt-8 xl:mt-0">
            <img
              src={phone}
              alt="phone icon"
              className="w-14 xl:w-20 mx-auto mb-2"
            />
            <p className="lg:text-xl xxl:text-2xl"></p>
            <a
              className="tel-nr hover:text-yellow-600 transition-all duration-300"
              href="tel:+49(0)15259329919"
            >
              +49 (0) 1525 932 9919
            </a>
          </div>
        </div>
      </div>
      <h3 className="font-bold text-xl lg:text-3xl xxl:text-4xl text-center mt-8 xl:mt-12 mb-8">
        Odwiedź również nasze media społecznościowe:
      </h3>
      <a
        href="https://www.facebook.com/profile.php?id=61568507917324"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <img
          src={facebook}
          alt="facebook logo"
          className="w-16 xl:w-24 mx-auto mb-2"
        />
      </a>

      <h3 className="font-bold text-xl lg:text-3xl xxl:text-4xl text-center mt-8 xl:mt-12 mb-8">
        Tu jesteśmy:
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4921.521339395849!2d11.595257297742398!3d51.92007749063425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a5ef3e1f22f519%3A0xb8a32ea9ef7c09b8!2sHauptstra%C3%9Fe%2016%2C%2039443%20Sta%C3%9Ffurt%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1732173016397!5m2!1spl!2spl"
        width="600"
        height="450"
        loading="lazy"
        className="w-full mt-8 mb-12"
      ></iframe>
    </div>
  );
};

export default Contact;
