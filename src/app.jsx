import Header from "./Components/Header/Header";
import "./main.css";
import "bootstrap/dist/css/bootstrap.css";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = document.querySelectorAll("section, footer")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting && setActiveSection(entry.target.id)
        })
      },
      {
        threshold: .2,
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect();

  }, [])
  
  const navOptions = [
    "home",
    "about",
    "timeline",
    "testimonials",
    "booking",
    "contact",
  ];

  return (
    <>
      <Header navOptions={navOptions} activeSection={activeSection} />
      <MainSection activeSection={activeSection} />
      <Footer />
    </>
  );
}
export default App;
