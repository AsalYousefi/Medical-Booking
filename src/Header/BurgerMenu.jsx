import { useState } from "react";

export default function BurgerMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={`pointer menu-btn d-flex flex-column justify-content-between ${
          isOpen && "open"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="position-absolute z-3">
          <div className="container">
            <nav className="navbar-na">
              <ul></ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
