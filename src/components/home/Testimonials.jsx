import data from "../../utils/home/testimonials.json";

const Testimonials = () => {
  const testimonials = data.testimonials;
  return (
    <section className="section-space">
      <div className="secondary-container">

        <div className="flex justify-between items-center pb-28">
          <div>
            <p className="section-title">Testimonials</p>
            <h2>What They Are Talking</h2>
          </div>
          <div className="review-count">
            <span className="">3000 +</span>
            <p>Customers are satisfied</p>
          </div>
        </div>

        <div className="testimonials-scroll flex items-start gap-28 overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {testimonials.map((testimonial, index) => {
                return(
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
