import { useTranslation } from "react-i18next";

export default function About() {

  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <div className="about-texts">
            <h2 className="about-title my-4 fw-bold text-black">
              {t("about.h2")}
            </h2>
            <p className="fw-light about-description">
              {t("about.description1")}
            </p>
            <p className="fw-light about-description">
              {t("about.description2")}
            </p>
          </div>
          <div className="experience mx-auto text-center d-flex justify-content-center align-items-center rounded-circle bg-white shadow-lg">
            <span className="fw-bold w-75"><span className="experience-number text-primary me-3">{t("about.experience.number")}</span>{t("about.experience.text")}</span>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
