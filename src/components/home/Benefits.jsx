const Benefits = () => {
  return (
    <section className="section-space bg-laundry-benefit">
        <div className="secondary-container">
            <div className="flex justify-between items-center">
                <div>
                    <img src="/laundry-benefits.png" alt="Laundry-benefits" className="laundry-image"/>
                </div>
                <div className="px-28">
                    <p className="section-title">Why Should You Believe Us?</p>
                    <h2>Our Laundry Benefits</h2>
                    <a href="#" className="btn my-20">Contact Us</a>
                    <div className="grid grid-cols-2 gap-x-44 gap-y-36">
                        <figure>
                            <img src="/safe-chemicals.png" alt="safe-chemicals" />
                            <figcaption className="caption">Safe Chemicals</figcaption>
                        </figure>
                        <figure>
                            <img src="/germ-free.png" alt="germ-free" />
                            <figcaption className="caption">Germ Free</figcaption>
                        </figure>
                        <figure>
                            <img src="/safe-handling.png" alt="safe-handling" />
                            <figcaption className="caption">Safe Handling</figcaption>
                        </figure>
                        <figure>
                            <img src="/insured-fabric.png" alt="insured-fabric" />
                            <figcaption className="caption">Insured Fabric</figcaption>
                        </figure>
                        <figure>
                            <img src="/expert-care.png" alt="expert-care" />
                            <figcaption className="caption">Expert Care</figcaption>
                        </figure>
                        <figure>
                            <img src="/pick-drop.png" alt="pick-drop" />
                            <figcaption className="caption">Pick & Drop</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits
