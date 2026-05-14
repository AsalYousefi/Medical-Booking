import { useTranslation } from "react-i18next";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {

  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 me-auto my-md-5 my-lg-0">
            <h3 className="text-capitalize text-black">{t("footer.openingHours")}</h3>
            <div className="my-4">
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>{t("footer.sunday")}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>{t("footer.days")}</span>
                <span className="fw-bold">{t("footer.daysHours")}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>{t("footer.saturday")}</span>
                <span className="fw-bold">{t("footer.saturdayHours")}</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-capitalize text-black">{t("footer.ourClinic")}</h3>
            <div className="my-4">
              <a href="mailto:hello@company.co">hello@company.co</a>
              <p className="my-3">
                {t("footer.address")}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ms-auto">
            <h3 className="text-capitalize text-black">{t("footer.socials")}</h3>
            <div className="socials d-flex justify-content-between my-4">
              <a href="https://facebook.com">
                <BsFacebook />
              </a>
              <a href="https://twitter.com">
                <BsTwitter />
              </a>
              <a href="https://instagram.com">
                <BsInstagram />
              </a>
              <a href="https://youtube.com">
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
