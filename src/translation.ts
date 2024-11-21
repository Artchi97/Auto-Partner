interface NavItem {
  name: string;
  id: string;
}

interface TranslationContent {
  [key: string]: {
    spanText: string;
    fallback: string;
    headerQuestion: string;
    nav: NavItem[];
    mainTitle: string;
    trustUs: {
      headerTrustUs: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
    };
    aboutUs: {
      headerAboutUs: string;
      p1: string;
      p2: string;
      p3: string;
      p4: string;
      logoHeader: string;
    };
    services: {
      headerServices: string;
      headerTyreService: string;
      headerTyreSales: string;
      headerCarService: string;
      tyreServiceDesc: string;
      tyreSalesDesc: string;
      carServiceDesc: string;
      showMoreBtn: string;
      hideBtn: string;
    };
    contact: {
      headerContact: string;
      openHoursHeader: string;
      monToFri: string;
      sat: string;
      anyQuestionHeader: string;
      socialMediaHeader: string;
      mapHeader: string;
    };
    createdBy: string;
    call: string;
  };
}

export const translation: TranslationContent = {
  de: {
    spanText: "Auto-Partner Atzendorf!",
    fallback: "ein Moment der Geduld...",
    headerQuestion: "Haben Sie Fragen? Kontaktieren Sie uns!",
    nav: [
      { name: "Über uns", id: "about-us" },
      { name: "Dienstleistungen", id: "services" },
      { name: "Kontakt", id: "contact" },
    ],
    mainTitle:
      "Ihre Reifen, Ihre Sicherheit. Vertrauen Sie auf Vulkanisationsspezialisten, die sich um jeden Weg kümmern.",
    trustUs: {
      headerTrustUs: "Warum sollten Sie uns vertrauen?",
      p1: "Willkommen bei ",
      p2: "Wir kümmern uns um Ihre Reifen und Ihr Auto, als wären es unsere eigenen. Ihr Auto ist bei uns in besten Händen, und die breite Auswahl an Reifen namhafter Marken garantiert Sicherheit und Komfort auf der Straße.",
      p3: "Wir legen größten Wert auf exzellenten Service, bieten fachkundige Beratung und eine individuelle Betreuung für jeden Kunden.",
      p4: "Unsere Erfahrung in der Branche sorgt dafür, dass Sie uns voll und ganz vertrauen können, egal ob Sie einen Reifenwechsel, eine Reparatur oder einen saisonalen Service benötigen. Mit uns wird jede Fahrt ruhiger und sicherer.",
    },
    aboutUs: {
      headerAboutUs: "Über uns",
      p1: "Wir sind ein neues, dynamisch wachsendes Unternehmen auf dem Reifenmarkt. Unser modernes Büro befindet sich in Staßfurt-Atzendorf, Hauptstraße 16, wo wir täglich fortschrittliche Technologie mit einer individuellen Betreuung jedes Kunden verbinden.",
      p2: "Unser junges und ambitioniertes Team besteht aus qualifizierten Fachleuten, die mit modernster Ausrüstung arbeiten und ihre Fähigkeiten kontinuierlich verbessern. Dadurch können wir höchste Servicequalität und umfassende Unterstützung in jeder Situation bieten.",
      p3: "Wir achten darauf, die Bedürfnisse unserer Kunden sowohl in Bezug auf Dienstleistungen als auch auf Preise zu erfüllen. Qualität und Kundenzufriedenheit stehen bei uns immer an erster Stelle.",
      p4: "Wir laden Sie herzlich ein, sich persönlich davon zu überzeugen. Wir warten auf Sie bei ",
      logoHeader:
        "In unserem Sortiment finden Sie Reifen von führenden Herstellern, unter anderem:",
    },
    services: {
      headerServices: "Dienstleistungen",
      headerTyreService: "Reifenservice",
      headerTyreSales: "Reifenverkauf",
      headerCarService: "Autoservice",
      tyreServiceDesc:
        "Wir bieten Ihnen persönliche und individuelle Beratung für Pkw bis 3,5 t sowie Motorräder. Wir gewährleisten einen umfassenden Servicebereich, von Reifenwechsel und -reparatur bis hin zur saisonalen Lagerung der Reifen.",
      tyreSalesDesc:
        "Unsere erfahrenen Mitarbeiter beraten Sie gerne, welche Reifen am besten zu Ihrem Fahrzeug passen, unter Berücksichtigung sowohl des Fahrzeugmodells als auch Ihrer individuellen Bedürfnisse. Wir kümmern uns nicht nur um die professionelle Auswahl der Reifen, sondern auch um deren Bestellung und fachgerechte Montage. Wir sorgen dafür, dass jeder Service-Schritt reibungslos und nach höchsten Standards abläuft, um Ihnen Komfort und Sicherheit auf der Straße zu garantieren.",
      carServiceDesc:
        "Bald erweitern wir unser Angebot um einen umfassenden Werkstattservice, in dessen Rahmen wir eine Vielzahl von Dienstleistungen anbieten werden, wie z.B. die allgemeine Inspektion des technischen Zustands von Fahrzeugen, den Ölwechsel, den Austausch von Filtern, Bremsbelägen und -scheiben sowie viele weitere Dienstleistungen im Bereich der Fahrzeugwartung und -reparatur. Unser Ziel ist es, Ihnen einen Rundum-Service zu bieten, damit Ihr Fahrzeug immer in einwandfreiem Zustand bleibt. Wir laden Sie ein, unser Angebot zu nutzen!",
      showMoreBtn: "Mehr anzeigen",
      hideBtn: "Verbergen",
    },
    contact: {
      headerContact: "Kontakt",
      openHoursHeader: "Öffnungszeiten:",
      monToFri: "Mo - Fr ",
      sat: "Sa ",
      anyQuestionHeader: "Haben Sie Fragen? Wir helfen Ihnen gerne!",
      socialMediaHeader: "Besuchen Sie auch unsere sozialen Medien:",
      mapHeader: "Hier sind wir:",
    },
    createdBy: "Ausführung: ",
    call: "Anruf",
  },
  eng: {
    spanText: "Auto-Partner Atzendorf!",
    fallback: "A moment of patience...",
    headerQuestion: "Got questions? Contact us!",
    nav: [
      { name: "About us", id: "about-us" },
      { name: "Services", id: "services" },
      { name: "Contact", id: "contact" },
    ],
    mainTitle:
      "Your tires, your safety. Trust the vulcanization specialists who will take care of every journey.",
    trustUs: {
      headerTrustUs: "Why should you trust us?",
      p1: "Welcome to <span className='font-semibold'>Auto-Partner Atzendorf!</span>",
      p2: "We will take care of your tires and car as if they were our own. Your car is in the best hands with us, and our wide selection of tires from renowned brands guarantees safety and comfort on the road.",
      p3: "We focus on the highest quality of service, providing expert advice and a personalized approach to each customer.",
      p4: "Our experience in the industry ensures that you can fully trust us, whether you need tire replacement, repairs, or seasonal servicing. With us, every journey will be calmer and safer.",
    },
    aboutUs: {
      headerAboutUs: "About us",
      p1: "We are a new, rapidly growing company in the tire industry. Our modern headquarters is located in Staßfurt-Atzendorf at Hauptstraße 16, where we combine advanced technology with a personalized approach to each customer every day.",
      p2: "Our young and ambitious team consists of qualified professionals who work with the most modern equipment, constantly improving their skills. This allows us to offer the highest quality services and full support in every situation.",
      p3: "We strive to meet our customers' needs—both in terms of services and prices. Quality and customer satisfaction are always our top priorities.",
      p4: "",
      logoHeader:
        "We warmly invite you to see for yourself. We're waiting for you at ",
    },
    services: {
      headerServices: "Services",
      headerTyreService: "Tire Service",
      headerTyreSales: "Tire Sales",
      headerCarService: "Car Service",
      tyreServiceDesc:
        "We offer personal and individualized advice for passenger cars up to 3.5 tons and motorcycles. We provide a full range of services, from tire replacement and repair to seasonal storage.",
      tyreSalesDesc:
        "Our experienced staff will gladly advise you on which tires best suit your car, taking into account both the vehicle model and your individual needs. We handle not only the professional selection of tires but also their ordering and expert installation. We ensure that every stage of the service runs smoothly and meets the highest standards, guaranteeing you comfort and safety on the road.",
      carServiceDesc:
        "We will soon expand our services to include a comprehensive workshop service, offering a wide range of options such as general vehicle condition inspections, oil and filter changes, brake pad and disc replacements, and many other maintenance and repair services. Our goal is to provide complete care, ensuring your car is always in excellent condition. We invite you to take advantage of our offer!",
      showMoreBtn: "Show more",
      hideBtn: "Hide",
    },
    contact: {
      headerContact: "Contact",
      openHoursHeader: "Opening hours:",
      monToFri: "Mon - Fri ",
      sat: "Sat ",
      anyQuestionHeader: "Got questions? We're happy to help!",
      socialMediaHeader: "Also visit our social media:",
      mapHeader: "Here we are:",
    },
    createdBy: "Implementation",
    call: "Call",
  },
  pl: {
    spanText: "Auto-Partner Atzendorf!",
    fallback: "Chwila cierpliwości...",
    headerQuestion: "Masz pytania? Skontaktuj się z nami!",
    nav: [
      { name: "O nas", id: "about-us" },
      { name: "Usługi", id: "services" },
      { name: "Kontakt", id: "contact" },
    ],
    mainTitle:
      "Twoje opony, Twoje bezpieczeństwo. Zaufaj specjalistom od wulkanizacji, którzy zadbają o każdą trasę.",
    trustUs: {
      headerTrustUs: "Dlaczego warto nam zaufać?",
      p1: "Witamy w <span className='font-semibold'>Auto-Partner Atzendorf!</span>",
      p2: "Zadbamy o Twoje opony i samochód, jak o nasze własne. Twoje auto jest u nas w najlepszych rękach, a szeroka oferta opon renomowanych marek to gwarancja bezpieczeństwa i komfortu na drodze.",
      p3: "Dbamy o najwyższą jakość obsługi, zapewniając fachowe doradztwo i indywidualne podejście do każdego klienta.",
      p4: "Nasze doświadczenie w branży sprawia, że możesz nam w pełni zaufać, niezależnie od tego, czy potrzebujesz wymiany opon, naprawy czy sezonowego serwisu. Z nami każda podróż będzie spokojniejsza i bezpieczniejsza.",
    },
    aboutUs: {
      headerAboutUs: "O nas",
      p1: "Jesteśmy nowym, dynamicznie rozwijającym się zakładem na rynku oponiarskim. Nasza nowoczesna siedziba mieści się w Staßfurt-Atzendorf przy Hauptstraße 16, gdzie każdego dnia łączymy zaawansowaną technologię z indywidualnym podejściem do każdego klienta.",
      p2: "Nasza młoda i ambitna drużyna to wykwalifikowani fachowcy, którzy pracują na najnowocześniejszym sprzęcie, nieustannie doskonaląc swoje umiejętności. Dzięki temu możemy zaoferować najwyższą jakość usług oraz pełne wsparcie w każdej sytuacji.",
      p3: "Dbamy o to, by spełniać potrzeby naszych klientów - zarówno pod względem usług, jak i cen. Jakość oraz zadowolenie klienta zawsze stawiamy na pierwszym miejscu.",
      p4: "Zapraszamy serdecznie, by przekonać się o tym osobiście. Czekamy na Ciebie w ",
      logoHeader:
        "W naszej ofercie znajdziesz opony pochodzące od wiodących producentów, m. in.:",
    },
    services: {
      headerServices: "Usługi",
      headerTyreService: "Serwis opon",
      headerTyreSales: "Sprzedaż opon",
      headerCarService: "Serwis samochodowy",
      tyreServiceDesc:
        "Oferujemy Państwu osobiste i indywidualne doradztwo dla samochodów osobowych do 3,5 t oraz motocykli. Zapewniamy pełen zakres usług serwisowych, od wymiany i naprawy opon, po ich sezonowe przechowywanie.",
      tyreSalesDesc:
        "Nasi doświadczeni pracownicy z przyjemnością doradzą, jakie opony najlepiej pasują do Państwa samochodu, uwzględniając zarówno model pojazdu, jak i indywidualne potrzeby. Zajmiemy się nie tylko profesjonalnym doborem opon, ale także ich zamówieniem oraz fachowym montażem. Dbamy o to, aby każdy etap obsługi przebiegał sprawnie i zgodnie z najwyższymi standardami, gwarantując Państwu komfort i bezpieczeństwo na drodze.",
      carServiceDesc:
        "Wkrótce rozszerzymy naszą ofertę o kompleksowy serwis warsztatowy, w ramach którego będziemy oferować szeroki zakres usług, takich jak ogólna inspekcja stanu technicznego samochodów, wymiana olejów, filtrów, klocków i tarcz hamulcowych oraz wiele innych usług związanych z konserwacją i naprawą pojazdów. Naszym celem jest zapewnienie pełnej obsługi, dzięki której Państwa samochód będzie zawsze w doskonałej kondycji. Zapraszamy do skorzystania z naszej oferty!",
      showMoreBtn: "Pokaż więcej",
      hideBtn: "Ukryj",
    },
    contact: {
      headerContact: "Kontakt",
      openHoursHeader: "Godziny otwarcia:",
      monToFri: "Pon - Pt ",
      sat: "Sob ",
      anyQuestionHeader: "Masz pytania? Chętnie pomożemy!",
      socialMediaHeader: "Odwiedź również nasze media społecznościowe:",
      mapHeader: "Tu jesteśmy:",
    },
    createdBy: "Wykonanie: ",
    call: "Zadzwoń",
  },
};
