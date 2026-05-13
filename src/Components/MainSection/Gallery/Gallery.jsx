export default function Gallery() {
  return (
    <section className="gallery py-4">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="/gallery/medium-shot-man-getting-vaccine.jpg"
              className="img-fluid"
              alt="gallery-photo"
            />
          </div>
          <div className="col-6">
            <img
              src="/gallery/female-doctor-with-presenting-hand-gesture.jpg"
              className="img-fluid"
              alt="gallery-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
