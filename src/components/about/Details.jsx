const Details = () => {
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="flex items-center gap-16 laptop-l:gap-12 laptop-s:gap-8 tab-s:flex-col mb-l:gap-6 mb:gap-4">
          <div className="basis-[calc(50%-2rem)] laptop-l:basis-[calc(50%-1.5rem)] laptop-s:basis-[calc(50%-1rem)]">
            <img
              src="/aboutus-clothes.png"
              alt="Clothes"
              className="about-image"
            />
          </div>
          <div className="basis-[calc(50%-2rem)] flex justify-center flex-col items-center gap-8 laptop-l:basis-[calc(50%-1.5rem)] laptop-l:gap-6 laptop-s:basis-[calc(50%-1rem)] laptop-s:gap-4">
            <p className="para2">
              The Sikka Cleaners is easy to arrive at, as it is located on main
              road only. Moreover, you don’t have to bother about the parking
              space and hassles, etc., as you will get ample space for parking
              your vehicle. However, if you still don’t want to take a pain of
              dropping your clothes for wet or dry-cleaning, you can simply dial
              our helpline number to order free pick up/drop of your clothes as
              our Sikka Cleaners Service in Memnagar, Ahmedabad locations is
              available for this facility.
            </p>
            <p className="para2">
              Free pick and drop facility is the key feature of our laundry
              Services in Ahmedabad, which is liked by all our clients. If you
              don’t have the time to drop your clothes for laundry or
              dry-cleaning, you don’t need to bother at all, we provide clothes’
              pick and drop facility to all our clients without any additional
              charge.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
