import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">

          <a href="#top" className="logo-section">
  <h2>Well Baby Clinic</h2>
  <span>By Dr. Kali Prasad Mishra</span>
</a>

          <div className="nav-links">
  <a href="#services" className={active === "services" ? "active" : ""}>Services</a>
  <a href="#education" className={active === "education" ? "active" : ""}>Education</a>
  <a href="#about" className={active === "about" ? "active" : ""}>About</a>
  <a href="#timings" className={active === "timings" ? "active" : ""}>Timings</a>
  <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
</div>

          <a href="tel:7008543572" className="nav-cta">
            Call Now
          </a>

          <button
            className="mobile-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
  <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
  <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
  <a href="#timings" onClick={() => setMenuOpen(false)}>Timings</a>
  <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
  <a href="tel:7008543572" className="mobile-call">
    Call Now
  </a>
</div>
    </>
  );
}

export default Navbar;