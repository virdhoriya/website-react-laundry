const ServiceList = () => {
  return (
    <section className="section-space">
      <div className="full-width relative pb-60 laptop-l:pb-48 laptop-m:pb-40 laptop-s:pb-32 tab-m:pb-24 tab-s:pb-20 tab:pb-0 tab:px-10 tab:space-y-8 mb-l:px-8 mb:space-y-6 mb:px-6">
        <img
          src="/clothes-collection.png"
          alt="Clothes Collection Image"
          className="tab:rounded-lg mb-l:rounded"
        />
        <div className="sm-services px-20 py-52 laptop-l:px-24 laptop-l:py-28 laptop-m:px-16 laptop-m:py-20 laptop-s:px-12 laptop-s:py-16 tab-l:px-10 tab-l:py-14 tab-s:px-8 tab-s:py-12 tab:py-8 mb:p-6">
          <div className="floated-container">
            <h2 className="pb-20 laptop-l:pb-16 laptop-m:pb-12 laptop-s:pb-10 tab-m:pb-8 tab-s:pb-8 mb-l:pb-6">
              A small list of our{" "}
              <span className="text-[var(--secondary)]">services</span> includes
            </h2>
            <div className="flex justify-between items-start gap-8 tab:flex-col tab:items-stretch">
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
            <div className="text-center mt-12 laptop-m:mt-10 tab-m:mt-8 tab:mt-6">
              <a
                href="/terms-condition"
                target="__blank"
                className="corporate-tc-link"
              >
                Term & conditions for corporate laundry service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
