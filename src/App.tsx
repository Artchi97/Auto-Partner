import Header from "./components/Header";
import CallMe from "./components/CallMe";
import MainImg from "./components/MainImg";
import TrustUs from "./components/TrustUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ToTopBtn";
import FadeIn from "./components/FadeIn";

function App() {
  return (
    <div>
      <FadeIn>
        <Header />
      </FadeIn>
      <FadeIn>
        <div className="block 2xl:hidden mt-8 mb-8">
          <CallMe
            bgColor="bg-mainBlack"
            others="font-bold bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text"
          />
        </div>
      </FadeIn>
      <main>
        <FadeIn>
          <MainImg />
        </FadeIn>
        <FadeIn>
          <TrustUs />
        </FadeIn>

        <FadeIn>
          <AboutUs id="about-us" />
        </FadeIn>

        <FadeIn>
          <Services id="services" />
        </FadeIn>

        <FadeIn>
          <Contact id="contact" />
        </FadeIn>
      </main>
      <FadeIn>
        <Footer />
      </FadeIn>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
