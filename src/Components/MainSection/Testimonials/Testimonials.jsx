import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Testimonials() {

  const { i18n, t } = useTranslation();

  const comments = [
    {
      patient: { status: "Recovered Patient", name: "Rosey" },
      title: "Best Advices",
      message:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.",
      rate: 5,
      profile:
        "/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg",
    },
    {
      patient: { status: "Recovered", name: "Ben Walker" },
      title: "Doctor cares everyone!",
      message:
        "Donec in elementum orci, nec posuere ligula. Quisque vulputate diam et ullamcorper ullamcorper. Pellentesque vestibulum neque at leo fermentum mattis.",
      rate: 4,
      profile:
        "reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg",
    },
    {
      patient: { status: "New Patient", name: "Laura Zono" },
      title: "Great services!",
      message:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet velit vitae purus aliquam efficitur.",
      rate: 5,
      profile: "/reviews/portrait-british-woman.jpeg",
    },
    {
      patient: { status: "Patient", name: "Marie" },
      title: "Best Health Care",
      message:
        "Phasellus ligula ante, tempus ac imperdiet ut, mattis ac nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      rate: 4,
      profile: "/reviews/beautiful-woman-face-portrait-brown-background.jpeg",
    },
    {
      patient: { status: "Recovered Patient", name: "Rosey" },
      title: "Best Advices",
      message:
        "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.",
      rate: 5,
      profile:
        "/reviews/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg",
    },
    {
      patient: { status: "Recovered", name: "Ben Walker" },
      title: "Doctor cares everyone!",
      message:
        "Donec in elementum orci, nec posuere ligula. Quisque vulputate diam et ullamcorper ullamcorper. Pellentesque vestibulum neque at leo fermentum mattis.",
      rate: 4,
      profile:
        "reviews/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg",
    },
  ];

  return (
    <section id="testimonials" className="testimonials position-relative">
      <div className="container position-relative">
        <h2 className="fw-bold text-black text-center my-5">{t("testimonials.h2")}</h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
          key={i18n.language === "fa" ? "rtl" : "ltr"}
          loop
          centeredSlides
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={500}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
        >
          {comments.map((comment, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="testimonial-card p-4 d-flex flex-column justify-content-between">
                  <div className="rate">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < comment.rate ? (
                        <BsStarFill key={i} />
                      ) : (
                        <BsStar key={i} />
                      )
                    )}
                  </div>
                  <h3 className="fw-bold text-primary my-2">{t(`testimonials.comments.${i}.title`)}</h3>
                  <p className="">{t(`testimonials.comments.${i}.message`)}</p>
                  <div className="patient-info">
                    <img
                      src={comment.profile}
                      alt={comment.name}
                      className="rounded-circle"
                    />
                    <div className="mt-2">
                      <span className="fw-bold text-white me-3 mb-0 fs-5">
                      {t(`testimonials.comments.${i}.name`)}
                      </span>
                      <span className="fs-6" style={{ color: "#6c757d" }}>
                      {t(`testimonials.comments.${i}.status`)}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-50 mx-auto d-flex justify-content-around my-3">
          <button
            type="button"
            className="prev-btn"
            aria-label="Previous"
          >
            {i18n.language === "en" ? <BsArrowLeft /> : <BsArrowRight />}
          </button>

          <button
            type="button"
            className="next-btn"
            aria-label="Next"
          >
            {i18n.language === "en" ? <BsArrowRight /> : <BsArrowLeft />}
          </button>
        </div>
      </div>
    </section>
  );
}
