import useFetchServices from "../../hooks/useFetchServices";

const ServiceList = () => {
  const {services} = useFetchServices();
  return (
    <section className="section-space">
      <div className="secondary-container">
        <div className="grid grid-cols-3 gap-28 items-start">
          {services.map((service) => {
            const {service_id, image, name, description} = service;
            return (
              <div
                key={service_id}
                className="px-20 py-28 bg-download rounded-3xl"
              >
                <span className="inline-block h-48 w-48 mb-8">
                  <img
                    src={image}
                    alt="Services image"
                    height={90}
                    width={90}
                  />
                </span>
                <h3 className="text-[2.8rem] leading-[2.8rem] font-bold pb-8">
                  {name}
                </h3>
                <p className="text-[1.8rem] font-medium">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
