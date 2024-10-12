const CommercialLaundry = () => {
  return (
    <section className="section-space bg-history">
      <div className="secondary-container">
        <h2 className="pb-28">Commercial Laundry</h2>

        <div className="flex gap-36">
          <div className="flex-[0_0_calc(33%-3rem)]">
            <img src="/loundry-image01.png" alt="Laundry image" />
            <div className="w-[90%]">
              <h4 className="cl-title">Sheets & Towels</h4>
              <p className="cl-description">
                Our linen program covers a range of products appropriate for use
                in businesses of all types and sizes. From the bedding for a 100
                bed hospital to the hand towels at a local coffee shop.
              </p>
            </div>
          </div>
          <div className="flex-[0_0_calc(33%-3rem)]">
            <img src="/loundry-image02.png" alt="Laundry image" />
            <div className="w-[90%]">
            <h4 className="cl-title">ECO Friendly</h4>
            <p className="cl-description">
              We care for the environment. We have adopted techniques that
              enable us clean your garment using much lesser water, detergent
              and other natural resources like electricity and gas. We use only
              environmentally safe detergents.
            </p>
            </div>
          </div>
          <div className="flex-[0_0_calc(33%-3rem)]">
            <img src="/loundry-image03.png" alt="Laundry image" />
            <div className="w-[90%]">
              <h4 className="cl-title">Entryway and Floor Mats</h4>
              <p className="cl-description">
                We offer standard or customizable floor and entryway mats for a
                professional, clean appearance at your business that also
                increase safety and comfort for staff and customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialLaundry;
