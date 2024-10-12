const ServiceList = () => {
  return (
    <section className="section-space">
      <div className="full-width relative pb-60">
        <img src="/clothes-collection.png" alt="Clothes Collection Image" />
        <div className="sm-services px-52 py-60">
          <div>
            <h2 className="pb-12">
              A small list of our <span className="text-red-500">services</span>{" "}
              includes
            </h2>
            <div className="flex justify-between">
              <div>
                <ul className="sr-list">
                  <li>
                    Heavy traditional and designer ware dry-clean and
                    steam-press
                  </li>
                  <li>Suit / Safari / Shervani and Safa</li>
                  <li>Saree roll-press and steam-press</li>
                  <li>Curtain wash / dry clean and steam-press</li>
                  <li>Blanket / Quilt</li>
                </ul>
              </div>
              <div>
                <ul className="sr-list">
                  <li>Travel bag / Beading</li>
                  <li>Toys and kid’s clothes</li>
                  <li>All house hold items</li>
                  <li>Purse / Shoes and Lather Article</li>
                  <li>Regular washing and Fold/Pressing service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
