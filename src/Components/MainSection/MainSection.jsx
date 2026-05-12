import About from "./About/About";
import Booking from "./Booking/Booking";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
// import Testimonials from "./Testimonials/Testimonials";
import Timeline from "./Timeline/Timeline";

export default function MainSection() {
    return (
        <main>
            <Home />
            <About />
            <Gallery />
            <Timeline />
            {/* <Testimonials /> */}
            <Booking />
        </main>
    )
}