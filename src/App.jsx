import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Timings from "./components/Timings";
import Contact from "./components/Contact";
import ParentEducation from "./components/ParentEducation";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ParentEducation />
      <About />
      <Timings />
      <Contact />
      <FloatingWhatsapp />
    </>
  );
}

export default App;