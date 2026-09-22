import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import ResumeBtn from "./Components/ResumeBtn/ResumeBtn";
import AuthPage from "./Components/AuthPage/AuthPage";

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

  const [isModalOpen, setIsModalOpen] = useState(false)

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
      <Header navOptions={navOptions} activeSection={activeSection} setIsModalOpen={setIsModalOpen} />
      <MainSection activeSection={activeSection} />
      <Footer />
      <ResumeBtn />
      {isModalOpen && <AuthPage setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
export default App;
