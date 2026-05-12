import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from "react-icons/bs";

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    <section id="testimonials">
      <div className="container position-relative">
        <h2 className="fw-bold text-black text-center my-5">Our Patients</h2>

        <button
          ref={prevRef}
          type="button"
          className="btn btn-light border position-absolute top-50 start-0 translate-middle-y shadow-sm d-none d-md-inline-flex align-items-center justify-content-center"
          style={{ width: 44, height: 44, zIndex: 5 }}
          aria-label="Previous"
        >
          <BsArrowLeft />
        </button>

        <button
          ref={nextRef}
          type="button"
          className="border position-absolute top-50 end-0 translate-middle-y shadow-sm d-none d-md-inline-flex align-items-center justify-content-center"
          style={{ width: 44, height: 44, zIndex: 5 }}
          aria-label="Next"
        >
          <BsArrowRight />
        </button>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          centeredSlides
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
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
                <div className="testimonial-card p-4">
                  <div className="rate">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < comment.rate ? (
                        <BsStarFill key={i} />
                      ) : (
                        <BsStar key={i} />
                      )
                    )}
                  </div>
                  <h3 className="fw-bold text-primary my-2">{comment.title}</h3>
                  <p className="">{comment.message}</p>
                  <div className="patient-info">
                    <img src={comment.profile} alt={comment.name} className="rounded-circle" />
                    <div>
                      <h4 className="fw-bold text-white">{comment.patient.name}</h4>
                      <span className="text-muted">{comment.patient.status}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
