export default function Booking() {
  function submitHandler() {}

  return (
    <section id="booking my-5">
      <div className="container">
        <h2 className="fw-bold text-black text-center my-4">
          Book an appointment
        </h2>
        <div className="">
          <form
            className=""
            onSubmit={submitHandler}
            method="post"
            autoComplete="on"
          >
            <input
              name="fullname"
              type="text"
              placeholder="Full name"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
            />
            <input
              name="email"
              type="email"
              placeholder="Email address"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
            />
            <input
              name="tel number"
              type="tel"
              placeholder="Phone: 123-456-7890"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
            />
            <input
              name="date of birth"
              type="date"
              required
              className="form-control p-3 my-2 border-0 rounded-0 border-bottom"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Additional Message"
              wrap="hard"
              className="form-control p-3 my-2"
            ></textarea>
            <div className="w-100 text-center">
              <button
                type="submit"
                className="submit-btn text-uppercase border-0 text-white my-3"
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
