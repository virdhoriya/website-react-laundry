import data from "../../utils/home/chooseus.json";

const ChooseUs = () => {
  return (
    <section className="space-xl choose-us-container text-white">
      <div className="secondary-container">
        <p className="section-title">WHY CHOOSE US</p>
        <h2 className="text-white mb-20 laptop-l:mb-16 laptop:mb-12 laptop-s:mb-10 tab-l:mb-8">
          Sikka Cleaners is best in Town
        </h2>

        <div className="grid grid-cols-3 justify-between gap-20 laptop-l:gap-16 laptop-md:gap-14 tab-l:gap-10 tab-s:grid-cols-2 tab-s:gap-8 mb-l:grid-cols-1">
          {data.cards.map((card, index) => {
            const { title, description } = card;
            return (
              <div className="card" key={index}>
                <h3 className="card-title text-white">{title}</h3>
                <p className="card-description">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
