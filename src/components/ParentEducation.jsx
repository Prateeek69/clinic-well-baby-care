import React, { useEffect, useRef, useState } from "react";
import photo1 from "../assets/photos/photo1.jpg";
import photo2 from "../assets/photos/photo2.jpg";
import photo3 from "../assets/photos/photo3.jpg";
import photo4 from "../assets/photos/photo4.jpg";
import photo5 from "../assets/photos/photo5.jpg";
import photo6 from "../assets/photos/photo6.jpg";
import photo7 from "../assets/photos/photo7.jpg";

const images = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
];

function ParentEducation() {
  const trackRef = useRef(null);
  const requestRef = useRef();
  const positionRef = useRef(0);
  const speedRef = useRef(window.innerWidth < 768 ? 0.65 : 0.6);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);

  const extendedImages = [...images, ...images];

  const normalSpeed = window.innerWidth < 768 ? 0.65 : 0.6;

  /* CONTINUOUS AUTO FLOW */
  useEffect(() => {
    const track = trackRef.current;

    const animate = () => {
      if (!isDragging) {
        positionRef.current += speedRef.current;

        if (positionRef.current >= track.scrollWidth / 2) {
          positionRef.current = 0;
        }

        if (positionRef.current < 0) {
          positionRef.current = track.scrollWidth / 2;
        }

        track.style.transform = `translateX(-${positionRef.current}px)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging]);

  /* DESKTOP ARROWS (SMOOTH BOOST) */
  const moveNext = () => {
    speedRef.current = 9;

    setTimeout(() => {
      speedRef.current = normalSpeed;
    }, 500);
  };

  const movePrev = () => {
    speedRef.current = -9;

    setTimeout(() => {
      speedRef.current = normalSpeed;
    }, 500);
  };

  /* MOBILE SWIPE */
  const handleTouchStart = (e) => {
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const diff = startXRef.current - currentX;
    positionRef.current += diff * 0.8;
    startXRef.current = currentX;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  /* ESC close */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setSelectedImage(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="education-title">Parent Education Corner</h2>

        <div className="education-wrapper">

          <button className="arrow left" onClick={movePrev}>
            ‹
          </button>

          <div
            className="education-slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="education-track" ref={trackRef}>
              {extendedImages.map((img, i) => (
                <div
                  className="education-card"
                  key={i}
                  onClick={() => setSelectedImage(img)}
                >
                  <img src={img} alt="Health Tip" />
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={moveNext}>
            ›
          </button>

        </div>
      </div>

      {selectedImage && (
        <div className="image-modal">
          <span
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </span>
          <img src={selectedImage} alt="Zoomed" />
        </div>
      )}
    </section>
  );
}

export default ParentEducation;