import { motion } from "framer-motion";

import checkup from "../assets/checkup.jpg";
import vaccination from "../assets/vaccination.jpg";
import newborn from "../assets/newborn.jpg";
import growth from "../assets/growth.jpg";
import illness from "../assets/illness.jpg";

function Services() {
  const services = [
    {
      title: "Child Health Checkups",
      image: checkup,
    },
    {
      title: "Vaccination & Immunization",
      image: vaccination,
    },
    {
      title: "Newborn Care",
      image: newborn,
    },
    {
      title: "Growth & Development Monitoring",
      image: growth,
    },
    {
      title: "Treatment of Common illnesses",
      image: illness,
    },
  ];
  
  return (
    <section
      id="services"
      className="section"
      style={{ background: "var(--soft-pink)" }}
    >
      <div className="container">

        <h2
          style={{
            textAlign: "center",
            marginBottom: "60px",
            color: "var(--primary-pink)",
            fontSize: "36px"
          }}
        >
          Services Offered
        </h2>

        <div className="services-wrapper">

  {/* Top Row (3 items) */}
  <div className="services-row">
    {services.slice(0, 3).map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="service-card"
        style={{
          backgroundImage: `url(${service.image})`
        }}
      >
        <div className="overlay">
          <h3>{service.title}</h3>
        </div>
      </motion.div>
    ))}
  </div>

  {/* Bottom Row (2 centered items) */}
  <div className="services-row bottom-row">
    {services.slice(3, 5).map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="service-card"
        style={{
          backgroundImage: `url(${service.image})`
        }}
      >
        <div className="overlay">
          <h3>{service.title}</h3>
        </div>
      </motion.div>
    ))}
  </div>

</div>

      </div>
      
    </section>
  );
}

export default Services;