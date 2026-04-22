import { useState } from "react"
import BurgerMenu from "./BurgerMenu"

export default function Header() {

    const [navOptions, setNavOptions] = useState([
        {title: "home", isActive: true},
        {title: "about", isActive: false},
        {title: "timeline", isActive: false},
        {title: "testimonials", isActive: false},
        {title: "booking", isActive: false},
        {title: "contact", isActive: false},
    ])

    return(
        <header className="position-sticky top-0 start-0 w-100">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-auto">
                        <a href="/" className="logo text-primary text-capitalize fw-bold text-center">
                            medic care
                            <span className="d-block" style={{color: "#717275", fontSize: "12px"}}>health specialist</span>
                        </a>
                    </div>
                    <BurgerMenu navOptions={navOptions} setNavOptions={setNavOptions} />
                </div>
            </div>
        </header>
    )
}