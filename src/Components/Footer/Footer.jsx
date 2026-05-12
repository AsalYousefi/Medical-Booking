import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="contact" className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 me-auto my-md-5 my-lg-0">
            <h3 className="text-capitalize text-black">opening hours</h3>
            <div className="my-4">
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>Sunday : Closed</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>Monday, Tuesday - Friday</span>
                <span className="fw-bold">8:00 AM - 3:30 PM</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center py-1">
                <span>Saturday</span>
                <span className="fw-bold">10:30 AM - 5:30 PM</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h3 className="text-capitalize text-black">our clinic</h3>
            <div className="my-4">
              <a href="mailto:hello@company.co">hello@company.co</a>
              <p className="my-3">
                123 Digital Art Street, San Diego, CA 92123
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 ms-auto">
            <h3 className="text-capitalize text-black">socials</h3>
            <div className="socials d-flex justify-content-between my-4">
              <a href="https://facebook.com">
                <BsFacebook />
              </a>
              <a href="https://twitter.com">
                <BsTwitter />
              </a>
              <a href="https://instagram.com">
                <BsInstagram />
              </a>
              <a href="https://youtube.com">
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="copyright-text">
            Copyright © Medic Care 2021 Design: TemplateMo
          </p>
        </div>
      </div>
    </footer>
  );
}
