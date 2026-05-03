import { useEffect, useState } from "react";
import { CiMobile2 } from "react-icons/ci";

export default function Home() {
  const images = [
    "/slider/doctor-s-hand-holding-stethoscope-closeup.jpg",
    "/slider/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg",
    "/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg",
  ];

  const words = ["days", "lives", "health"];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imagesInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(imagesInterval);
  });

  return (
    <section className="home mb-" id="home">
      <div className="container position-relative">
        <div className="hero-section position-relative">
          {images.map((img, i) => {
            return (
              <img
                src={img}
                key={i}
                className={`${
                  activeIndex === i && "active-img"
                } w-100 h-100 position-absolute`}
                alt=""
              />
            );
          })}
        </div>

        <div className="home-description py-sm-4 px-sm-5 bg-white">
          <div className="home-title position-relative py-2">
            <h2 className="fw-bold">
              Better
              {words.map((word, i) => {
                return (
                  <span
                    key={i}
                    className={`${
                      activeIndex === i && "active-word"
                    } ms-3 position-absolute w-50 h-100 text-primary`}
                  >
                    {word}
                  </span>
                );
              })}
            </h2>
          </div>
          <p className="fw-light fs-5">
            Medic Care is a Bootstrap 5 Template provided by TemplateMo website.
            Credits go to FreePik and RawPixel for images used in this template.
          </p>
          <div className="d-flex align-items-center fw-500 mt-2">
            <button className="text-uppercase text-primary border py-2" style={{width: "35%"}}>
              <a href="#about">learn more</a>
            </button>
            <div className="mx-4 d-flex align-items-center phone-number">
              <CiMobile2 className="fs-4" />
              <span className="fs-5 mx-1">010-020-0340</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
