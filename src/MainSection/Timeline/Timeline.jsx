import { BsFillPatchCheckFill, BsBook, BsFileMedical, BsGlobe, BsPerson } from "react-icons/bs";

export default function Timeline() {
  const timelines = [
    {
      title: "Get the vaccine",
      date: "2021-07-31 Saturday",
      icon: <BsFillPatchCheckFill />,
      description:
        "Donec facilisis urna dui, a dignissim mauris pretium a. Quisque quis libero fermentum, tempus felis eu, consequat nibh.",
    },

    {
      title: "Consulting your health",
      date: "2021-07-15 Thursday",
      icon: <BsBook />,
      description:
        "You are fully permitted to use this template for your commercial or personal website. You are not permitted to redistribute the template ZIP file for a download purpose on any other Free CSS collection website.",
    },

    {
      title: "Certified Nurses",
      date: "2021-06-28 Monday",
      icon: <BsFileMedical />,
      description:
        "Phasellus eleifend, urna interdum congue viverra, arcu neque ultrices ligula, id pulvinar nisi nibh et lacus. Vivamus gravida, ipsum non euismod tincidunt, sapien elit fermentum mi, quis iaculis enim ligula at arcu.",
    },

    {
      title: "Covid-19 Hospitals",
      date: "2021-05-30 Sunday",
      icon: <BsGlobe />,
      description: `Fusce vestibulum euismod nulla sed ultrices. Praesent rutrum nulla vel sapien euismod, quis tempus dui placerat.
      Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla`,
    },

    {
      title: "Freelance Nursing",
      date: "2021-05-18 Tuesday",
      icon: <BsPerson />,
      description:
        "If you need a working contact form that submits email to your inbox, please visit our contact page for more information.",
    },
  ];

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <h2 className="timeline-title fw-bold text-black text-center my-5">
          Our Timeline
        </h2>
        <div className="position-relative">
            <div className="vertical-line"></div>
            {timelines.map((timeline, i) => {
                return (
                    <div key={i} className="timeline d-flex flex-column flex-md-row align-items-center my-5">
                        <div className="date my-2 my-md-4 align-self-end w-75 align-self-md-start">
                            <span className="ms-1">{timeline.date}</span>
                        </div>
                        <div className="timeline-content d-flex justify-content-around w-100">
                            <div className="d-flex align-items-center justify-content-center me-3 mx-md-auto shadow-lg icon bg-white rounded-circle text-primary">
                                {timeline.icon}
                            </div>
                            <div className="timeline-texts rounded-1 shadow-lg mt-3">
                                <h3 className="bg-black text-white py-3 px-4 rounded-top-1 position-relative">{timeline.title}</h3>
                                <p className="py-3 px-4 fw-light">{timeline.description}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
    </section>
  );
}
