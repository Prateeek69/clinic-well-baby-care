import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Timings from "./components/Timings";
import Contact from "./components/Contact";
import ParentEducation from "./components/ParentEducation";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { Analytics } from "@vercel/analytics/react";

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
      <Analytics />
    </>
  );
}

export default App;