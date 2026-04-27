import { useState } from "react";

export default function Header() {

  
  const [activeIndex, setActiveIndex] = useState(0);
  
  const [isOpen, setIsOpen] = useState(false);

  const navOptions = [
    "home", 
    "about", 
    "timeline", 
    "testimonials",
    "booking",
    "contact", 
  ];

  function changeActiveIndex(i) {
    setActiveIndex(i)
  }

  return (
    <header className="position-sticky top-0 start-0 w-100 z-2 py-2">
      <div className="container">
        <nav className="d-flex justify-content-center align-items-center">
          <ul className="w-100 m-0 list-unstyled mx-auto d-lg-flex justify-content-lg-around align-items-lg-center">
            {navOptions.map((navOp, i) => {
              if (i < 3) return (
                <li key={i} className={`${activeIndex === i && "active"} d-none d-lg-block text-capitalize nav-item fw-500`} onClick={() => changeActiveIndex(i)}>
                  <a href={`#${navOp}`} className="nav-link">{navOp}</a>
                </li>
              )
            })}
            <li className="text-center">
              <a
                href="/"
                className="logo text-primary text-capitalize fw-bold"
              >
                medic care
                <span
                  className="d-block"
                  style={{ color: "#717275", fontSize: "12px" }}
                >
                  health specialist
                </span>
              </a>
            </li>
            {navOptions.map((navOp, i) => {
              if (i >=3 ) return (
                <li key={i} className={`${activeIndex === i && "active"} d-none d-lg-block text-capitalize nav-item fw-500`} onClick={() => changeActiveIndex(i)}>
                  <a href={`#${navOp}`} className="nav-link">{navOp}</a>
                </li>
              )
            })}
          </ul>
          <div className={`d-lg-none pointer menu-btn d-flex flex-column justify-content-between ${isOpen && "open"}`}
            onClick={() => setIsOpen((prev) => !prev)}
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>
      {isOpen && (
        <div className="d-lg-none position-absolute z-3 w-100 bg-white start-0 top-100">
          <div className="container">
            <nav>
              <ul className="list-unstyled">
                {navOptions.map((navOp, i) => {
                  return (
                    <li key={i} className={`${activeIndex === i && "active"} text-capitalize nav-item fw-500 py-1 my-1`} onClick={() => changeActiveIndex(i)}>
                      <a href={`#${navOp}`} className="nav-link">{navOp}</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
