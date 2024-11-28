const ServiceList = () => {
  return (
    <section className="section-space">
      <div className="full-width relative pb-60 laptop-l:pb-48 laptop-s:pb-40 tab-m:pb-32 tab:pb-24">
        <img
          src="/clothes-collection.png"
          alt="Clothes Collection Image"
          className="cloth-collection-image"
        />
        <div className="sm-services px-20 py-52 laptop-l:px-24 laptop-l:py-28 laptop-m:px-16 laptop-m:py-20 laptop-s:px-12 laptop-s:py-16 tab-l:px-10 tab-l:py-14 tab:px-8 tab:py-12">
          <div className="floated-container">
            <h2 className="pb-20 laptop-m:pb-14 laptop-s:pb-10 tab-s:pb-8 tab:pb-6">
              A small list of our{" "}
              <span className="text-[var(--secondary)]">services</span> includes
            </h2>
            <div className="flex justify-between items-start gap-8 tab-s:gap-4">
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
