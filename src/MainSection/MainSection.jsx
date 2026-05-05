import About from "./About/About";
import Gallery from "./Gallery/Gallery";
import Home from "./Home/Home";
import Timeline from "./Timeline/Timeline";

export default function MainSection() {
    return (
        <main>
            <Home />
            <About />
            <Gallery />
            <Timeline />
        </main>
    )
}