import { useState } from "react";
import { useTranslation } from "react-i18next";
import LngBtn from "./LngBtn";
import AuthBtn from "./AuthBtn";

type HeaderProps = {
  navOptions: string[];
  activeSection: string;
};

export default function Header({ navOptions, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  return (
    <header className="d-flex justify-content-around align-items-center position-sticky top-0 start-0 w-100 z-3 p-3 py-lg-4 shadow-lg bg-light">
      <div
        className={`d-lg-none pointer menu-btn d-flex flex-column justify-content-between ${
          isOpen && "open"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className="d-none d-lg-flex justify-content-around align-items-center w-100">
        <LngBtn />
        <ul className="m-0 list-unstyled d-flex justify-content-between align-items-center w-50">
          {navOptions.slice(0, 3).map((navOp, i) => (
            <li
              key={i}
              className={`${
                activeSection === navOp && "active"
              } text-capitalize nav-item fw-bold`}
            >
              <a href={`#${navOp}`} className="nav-link">
                {t(`header.nav.${navOp}`)}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <h1 className="logo text-center text-primary text-capitalize fw-bold">
        <a href="/">
          {t("header.logo.h1")}
          <span className="d-block">{t("header.logo.p")}</span>
        </a>
      </h1>

      <nav className="d-none d-lg-flex justify-content-around align-items-center w-100">
        <ul className="m-0 list-unstyled d-flex justify-content-between align-items-center w-50">
          {navOptions.slice(3).map((navOp, i) => (
            <li
              key={i}
              className={`${
                activeSection === navOp && "active"
              } text-capitalize nav-item fw-bold`}
            >
              <a href={`#${navOp}`} className="nav-link">
                {t(`header.nav.${navOp}`)}
              </a>
            </li>
          ))}
        </ul>
        <AuthBtn />
      </nav>
      <div className="d-lg-none"><AuthBtn /></div>

      {isOpen && (
        <div className="d-lg-none position-absolute z-3 w-100 bg-light start-0 top-100">
          <div className="container">
            <nav>
              <ul className="list-unstyled">
                <li className="nav-item py-1 my-1">
                  <LngBtn />
                </li>
                {navOptions.map((navOp, i) => {
                  return (
                    <li
                      key={i}
                      className={`${
                        activeSection === navOp && "active"
                      } text-capitalize nav-item fw-500 py-1 my-1`}
                    >
                      <a href={`#${navOp}`} className="nav-link">
                        {t(`header.nav.${navOp}`)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
