import data from "../../utils/home/testimonials.json";

const Testimonials = () => {
  const testimonials = data.testimonials;
  return (
    <section className="space-xl">
      <div className="secondary-container">
        <div className="flex justify-between items-center pb-20">
          <div>
            <p className="section-title">Testimonials</p>
            <h2>What They Are Talking</h2>
          </div>
          <div className="review-count">
            <span>3000 +</span>
            <p>Customers are satisfied</p>
          </div>
        </div>

        <div className="testimonials-scroll flex items-start gap-28 overflow-x-scroll snap-x scroll-smooth">
          {testimonials.map((testimonial, index) => {
            return (
              <div key={index} className="review-container snap-start">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.message}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
