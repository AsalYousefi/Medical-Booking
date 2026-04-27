import { useEffect, useState } from "react"

export default function About() {

    const images = [
        "/slider/doctor-s-hand-holding-stethoscope-closeup.jpg",
        "/slider/portrait-successful-mid-adult-doctor-with-crossed-arms.jpg",
        "/slider/young-asian-female-dentist-white-coat-posing-clinic-equipment.jpg"
    ]

    const words = ["days", "lives", "health"]

    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const imagesInterval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3)
        }, 3000);

        return () => clearInterval(imagesInterval)
    })

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="hero-section position-relative">
                    {images.map((img, i) => {
                        return (
                            <img src={img} key={i} className={`${activeIndex === i && "active-img"} w-100 h-100 position-absolute`} alt="" />
                        )
                    })}
                </div>
                <div>
                    <h2>Better <span className="text-primary">{words[activeIndex]}</span></h2>
                </div>
            </div>
        </section>
    )
}