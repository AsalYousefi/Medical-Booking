import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CiMobile2 } from "react-icons/ci";

export default function Home() {

  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const imagesInterval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(imagesInterval);
  });

  const images = [
    "/slider/doctor-s-hand-holding-stethoscope-closeup.jpg",
    "/slider/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg",
    "/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg",
  ];

  const words = ["days", "lives", "health"];

  return (
    <section className="home" id="home">
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

        <div className="home-texts p-3 p-sm-4 bg-white">
          <div className="home-title position-relative py-2">
            <h2 className="fw-bold" dir="ltr">
              {t("home.h2")}
              {words.map((word, i) => {
                return (
                  <span
                    key={i}
                    className={`${
                      activeIndex === i && "active-word"
                    } ms-3 position-absolute w-50 h-100 text-primary`}
                  >
                    {t(`home.word.${word}`)}
                  </span>
                );
              })}
            </h2>
          </div>
          <p className="fw-light fs-5">
            {t("home.description")}
          </p>
          <div className="d-flex align-items-center fw-500 mt-4">
            <button className="text-uppercase text-primary border py-2" style={{width: "40%"}}>
              <a href="#about">{t("home.btn")}</a>
            </button>
            <div className="ms-4 d-flex align-items-center phone-number">
              <CiMobile2 className="fs-4" />
              <span className="fs-5 mx-1">{t("home.tel")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
