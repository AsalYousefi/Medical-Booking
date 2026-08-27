import About from "./About/About";
import Booking from "./Booking/Booking";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
import Testimonials from "./Testimonials/Testimonials";
import Timeline from "./Timeline/Timeline";

type MainSectionProps = {
  activeSection: string;
};

export default function MainSection(_props: MainSectionProps) {
  return (
    <main>
      <Home />
      <About />
      <Gallery />
      <Timeline />
      <Testimonials />
      <Booking />
    </main>
  );
}
