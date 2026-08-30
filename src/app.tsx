import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import ResumeBtn from "./Components/ResumeBtn/ResumeBtn";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navOptions = [
    "home",
    "about",
    "timeline",
    "testimonials",
    "booking",
    "contact",
  ];

  return (
    <div className="position-relative">
      <ResumeBtn />
      <Header navOptions={navOptions} activeSection={activeSection} />
      <MainSection activeSection={activeSection} />
      <Footer />
    </div>
  );
}
export default App;
