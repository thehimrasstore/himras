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
import gal10 from "../../assets/product11.jpg"


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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="">
                        <img
                            src={gal1}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal2}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal3}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal4}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal5}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal6}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal7}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal8}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="">
                        <img
                            src={gal9}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                    <div className="block md:hidden">
                        <img
                            src={gal10}
                            alt=""
                            className="w-full h-64  object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* get in touch */}
            <section className="bg-primary">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-black">Visit Our Location</h2>
      <p className="mt-4 text-lg text-black">
      Come explore our store and experience the finest products, handcrafted with care and tradition. We’re here to assist you in finding what you need.
      </p>
    </div>
    <div className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Map Section */}
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.344403770432!2d79.51735077556062!3d29.12503047539949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0854e46fbbcbb%3A0xe8ad2dca724e9699!2sGraphic%20Era%20Hill%20University%2C%20Haldwani%20Campus!5e0!3m2!1sen!2sin!4v1734019067737!5m2!1sen!2sin"
            width="100%"
            height="480"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Address Section */}
        <div>
          <div className="max-w-full mx-auto rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
              <p className="mt-1 text-gray-600">
              Tularampur, Near Mahalaxmi Temple, opp. Middas Squar, Haldwani, Uttarakhand 263139
              </p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900">Hours</h3>
              <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
              <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
              <p className="mt-1 text-gray-600">Sunday: Closed</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4">
  <h3 className="text-lg font-medium text-gray-900">Contact</h3>
  <p className="mt-1 text-gray-600">
    Email:{" "}
    <a
      href="mailto:Contact@himras.in"
      className="text-blue-500 hover:underline"
    >
      Contact@himras.in
    </a>
  </p>
  <p className="mt-1 text-gray-600">
    Phone:{" "}
    <a
      href="tel:+918077129142"
      className="text-blue-500 hover:underline"
    >
      +91 8077129142
    </a>
  </p>
  <p className="mt-1 text-gray-600">
    LinkedIn:{" "}
    <a
      href="https://www.linkedin.com/company/himras/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      Himras
    </a>
  </p>
  <p className="mt-1 text-gray-600">
    Instagram:{" "}
    <a
      href="https://www.instagram.com/the_himras_store"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      @the_himras_store
    </a>
  </p>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}
