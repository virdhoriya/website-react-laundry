const ChooseUs = () => {
  return (
    <section className="section-space bg-[url('/chooseus-bg.png')] text-white">
      <div className="secondary-container">
        <p className="section-title">WHY CHOOSE US</p>
        <h2 className="mb-20 text-white">Sikka Cleaners is best in Town</h2>

        <div className="grid grid-cols-3 gap-20">
          <div className="card">
            <h3 className="card-title text-white">Quality</h3>
            <p className="card-description">
              We use advanced methods and products for wash and dry-clean to
              enhance your clothes newness and shine.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title text-white">Affordable</h3>
            <p className="card-description">
                At Dry Cleaners Point, we charge a reasonable amount for laundry and dry-cleaning, which is not heavy on your pocket.
            </p>
          </div>
          
          <div className="card">
            <h3 className="card-title text-white">Care of Clothes</h3>
            <p className="card-description">
                We take utmost care of your clothes while dry-cleaning or laundry and take essential precautions.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title text-white">Pick & Drop</h3>
            <p className="card-description">
                Hence, we value your time and provide the facility of instant pick up and drop off clothes at your doorstep.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title text-white">On Time Delivery</h3>
            <p className="card-description">
                We make sure that you get your clothes right on time if you have to attend an important meeting, party, interview, etc.
            </p>
          </div>

          <div className="card">
            <h3 className="card-title text-white">Environment Friendly</h3>
            <p className="card-description">
                We use machines and equipment that are completely environment friendly in terms of less water consumption.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
