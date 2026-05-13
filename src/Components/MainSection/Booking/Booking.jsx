import { useEffect, useState } from "react";
import { PiArticleNyTimesBold } from "react-icons/pi";

export default function Booking() {
  const [patients, setPatients] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  function resetData() {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  }

  function submitHandler(e) {
    console.log(formData);
    e.preventDefault();
    setPatients((prev)=> [...prev, formData]);
    resetData();
  }

  useEffect(() => {
    console.log(patients)
  }, [patients])

  return (
    <section id="booking" className="booking">
      <div className="container">
        <h2 className="fw-bold text-black text-center my-5">
          Book an appointment
        </h2>
        <div className="">
          <form
            className="d-lg-flex flex-wrap"
            onSubmit={submitHandler}
            method="post"
          >
            <input
              name="fullname"
              type="text"
              placeholder="Full name"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
              autoComplete="on"
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              value={formData.fullName}
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
              autoComplete="on"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone: 123-456-7890"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
              autoComplete="on"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              value={formData.phone}
            />
            <input
              name="date"
              type="date"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
              autoComplete="on"
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              value={formData.date}
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Additional Message"
              wrap="hard"
              className="form-control p-3 my-2 border-0 border-bottom"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              value={formData.message}
            ></textarea>
            <div className="w-100 text-center my-4 my-sm-5">
              <button
                type="submit"
                className="submit-btn text-uppercase border-0 text-white py-3"
              >
                book now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
