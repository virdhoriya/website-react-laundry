import { Link } from "react-router-dom"

const Benefits = () => {
  return (
    <section className="space-xl bg-[#EFF3FF] benefits-container">
        <div className="secondary-container">
            <div className="flex justify-between items-center gap-16 tab:flex-col">
                <div>
                    <img src="/laundry-benefits.png" alt="Laundry-benefits" className="max-w-[65.9rem] w-full h-auto laptop-l:max-w-[55rem] laptop-m:max-w-[48rem] laptop-s:max-w-[40rem] tab-l:max-w-[38rem] tab-m:max-w-[35rem] tab-s:max-w-[30rem]"/>
                </div>
                <div className="px-28 laptop-l:px-20 laptop-s:px-16 tab-l:px-12 tab-s:px-0">
                    <p className="section-title">Why Should You Believe Us?</p>
                    <h2>Our Laundry Benefits</h2>
                    <Link to="/about" className="btn my-20 laptop-l:my-16 laptop-s:my-12 tab-l:my-8">Contact Us</Link>
                    <div className="grid grid-cols-2 gap-x-44 gap-y-36 laptop-m:gap-y-28 laptop-m:gap-x-20 laptop-s:gap-y-24 laptop-s:gap-x-16 tab-l:gap-y-20 tab-l:gap-x-16 tab-s:gap-x-12 tab-s:gap-y-16">
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
