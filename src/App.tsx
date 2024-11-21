import { lazy, Suspense } from "react";
import { LanguageProvider } from "./LanguageContext";

const Header = lazy(() => import("./components/Header.tsx"));
const CallMe = lazy(() => import("./components/CallMe.tsx"));
const MainImg = lazy(() => import("./components/MainImg.tsx"));
const TrustUs = lazy(() => import("./components/TrustUs.tsx"));
const AboutUs = lazy(() => import("./components/AboutUs.tsx"));
const Services = lazy(() => import("./components/Services.tsx"));
const Contact = lazy(() => import("./components/Contact.tsx"));
const Footer = lazy(() => import("./components/Footer.tsx"));
const ToTopBtn = lazy(() => import("./components/ToTopBtn.tsx"));
const FadeIn = lazy(() => import("./components/FadeIn.tsx"));
const FallbackComponent = lazy(
  () => import("./components/FallbackComponent.tsx")
);

function App() {
  return (
    <LanguageProvider>
      <Suspense fallback={<FallbackComponent />}>
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
          <ToTopBtn />
        </div>
      </Suspense>
    </LanguageProvider>
  );
}

export default App;
