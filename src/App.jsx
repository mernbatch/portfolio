import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="relative bg-primaryColor text-lightText">
      {/* <img src={banner} alt="banner image" className="w-full h-full" /> */}
      <Hero />
      <AboutMe />
      <Features />
      <Portfolio />
      <ContactMe />
    </div>
  );
}

export default App;
