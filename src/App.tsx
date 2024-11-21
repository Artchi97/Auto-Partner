import Header from "./components/Header";
import CallMe from "./components/CallMe";
import MainImg from "./components/MainImg";
import TrustUs from "./components/TrustUs";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="block 2xl:hidden mt-8 mb-8">
        <CallMe
          bgColor="bg-mainBlack"
          others="font-bold bg-gradient-to-r from-white to-yellow-500 text-transparent bg-clip-text"
        />
      </div>
      <main>
        <MainImg />
        <TrustUs />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
