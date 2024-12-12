import React from "react";
import backgroundImage from "../../assets/bg.png"
import bannerImage from "../../assets/rmproduct6.png"
import logo from "../../assets/logo.png"
import gal1 from "../../assets/product1.jpg"
import gal2 from "../../assets/product2.jpg"
import gal3 from "../../assets/product3.jpg"
import gal4 from "../../assets/product4.jpg"
import gal5 from "../../assets/product5.jpg"
import gal6 from "../../assets/product6.jpg"
import gal7 from "../../assets/product7.jpg"
import gal8 from "../../assets/product8.jpg"
import gal9 from "../../assets/product9.png"


export default function Home() {
    return (
        <div className=" ">
            {/* home */}

            <section>
                <img src={backgroundImage} alt="" className="mb-6" />
            </section>

            {/* about */}
            <section>
                <section className="text-black body-font">
                    <h2 className="text-center text-4xl">About Us</h2>
                    <div className="container mx-auto flex px-5  md:flex-row flex-col items-center text-lg">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={logo}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-8 leading-relaxed lg:mr-24">
                                Him-Ras is more than just a brand; it’s a
                                journey into the heart of the Himalayas. Every
                                product we offer is carefully crafted by
                                talented women from local self-help groups,
                                embodying the traditions, flavors, and values of
                                Uttarakhand. By choosing Him-Ras, you’re not
                                just enjoying authentic Himalayan products;
                                you’re also supporting sustainable livelihoods
                                and empowering communities.
                            </p>
                            <div className="flex justify-center my-6 md:my-0">
                                <button className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* add */}

            <section className="bg-secondary">
  <section className="text-white body-font">
    <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
      {/* Left Section - Home-made products, From the Taste of Himalayas, Made with traditional methods */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>Home-made products</p>
        </div>
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>From the Taste of Himalayas</p>
        </div>
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>Made with traditional methods</p>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8 md:mb-0">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={bannerImage}
        />
      </div>

      {/* Right Section - Certified by, 100% purely extracted, None supplementary materials */}
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>Certified by --</p>
        </div>
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>100% purely extracted by nature</p>
        </div>
        <div className="mb-8 leading-relaxed text-xl w-full pl-6 md:pl-24">
          <p>None supplementary materials added</p>
        </div>
      </div>
    </div>
  </section>
</section>


            {/* popular */}
            <section className="bg-white py-6 px-6 md:mx-24">
                {/* Heading */}
                <h2 className="text-center text-4xl mb-8">Products Gallery</h2>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="">
                        <img
                            src={gal1}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal2}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal3}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal4}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal5}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal6}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal7}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal8}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal9}
                            alt=""
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
