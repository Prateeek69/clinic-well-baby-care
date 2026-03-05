import { motion } from "framer-motion";
import doctorImage from "../assets/doctor.png";

function Hero() {
  return (
    <section className="hero-section">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        
        {/* LEFT SIDE */}
        <div style={{ flex: "1", minWidth: "320px" }}>
          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  style={{
    fontSize: "52px",
    color: "var(--primary-pink)",
    marginBottom: "10px",
    lineHeight: "1.2"
  }}
>
  Well Baby Clinic
  <span
    style={{
      fontSize: "22px",
      display: "block",
      marginTop: "10px",
      fontWeight: "400"
    }}
  >
    by Dr. Kali Prasad Mishra
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              fontSize: "20px",
              marginBottom: "30px",
              color: "#555"
            }}
          >
            Pediatric Specialist – Dedicated to nurturing healthy, happy children with expert care and compassion
            <br></br>
            👶 Specialized in newborn & child healthcare<br></br>
🩺 Focused on growth, development & preventive pediatrics<br></br>
💙 Committed to providing trustworthy, family-centered medical care
          </motion.p>

          <motion.a
            href="tel:7008543572"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <button
              style={{
                background: "var(--primary-pink)",
                color: "white",
                padding: "16px 32px",
                borderRadius: "10px",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
                boxShadow: "0 12px 30px rgba(194,24,91,0.3)",
                transition: "0.3s"
              }}
            >
              Call Now
            </button>
          </motion.a>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    y: [0, -5, 0],   // floating effect
  }}
  transition={{
    opacity: { duration: 0.8 },
    scale: { duration: 0.8 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  style={{
    width: "100%",
maxWidth: "480px",   // 350 × 1.5
aspectRatio: "1 / 1",
    borderRadius: "50%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  {/* Radial Background Ring */}
  <motion.div
  animate={{
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    position: "absolute",
    width: "110%",
    height: "110%",
    maxWidth: "520px",
    maxHeight: "520px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(194,24,91,0.35) 0%, rgba(194,24,91,0.15) 60%, transparent 70%)",
    zIndex: 0,
  }}
></motion.div>

  {/* Doctor Image */}
  <img
    src={doctorImage}
    alt="Dr. Kali Prasad Mishra"
    style={{
      width: "85%",
height: "85%",
      objectFit: "cover",
      borderRadius: "50%",
      border: "8px solid white",
      boxShadow: "0 20px 40px rgba(194,24,91,0.25)",
      zIndex: 1,
    }}
  />
</motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;