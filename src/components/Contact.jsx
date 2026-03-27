import { FaWhatsapp, FaFacebookF, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

function Contact() {
  const phoneNumber = "7008543572";

  const whatsappLink = `https://wa.me/91${phoneNumber}`;
  const callLink = `tel:${phoneNumber}`;
  const directionLink =
    "https://maps.app.goo.gl/cudmUvn5aR8YhdJu7";

  const address =
    "Plot No 4402, Pandav Nagar, Badagada Brit Colony, Near Saraswati Sishu Mandir, Bhubaneswar – 751018";

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <h2 className="contact-title">
          Visit Well Baby Clinic Today
        </h2>

        <div className="contact-address">
          <p>{address}</p>
        </div>

        <div className="contact-grid">

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d467.9067855528284!2d85.8514389!3d20.2482862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a13ad4695763%3A0xef6ce7e2bbf95d02!2sWell%20baby%20clinic%20by%20Dr%20Kali%20prasad%20Mishra!5e0!3m2!1sen!2sin!4v1772478697237!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-actions">

            <a
              href={directionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <FaMapMarkerAlt className="icon map" />
              <span>Get Directions</span>
            </a>

            <a href={callLink} className="cta-btn">
              <FaPhone className="icon phone" />
              <span>Call Now</span>
            </a>

            <a
              href="https://www.facebook.com/kaliprasadmishrapaediatric"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <FaFacebookF className="icon facebook" />
              <span>Facebook</span>
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              <FaWhatsapp className="icon whatsapp" />
              <span>WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;