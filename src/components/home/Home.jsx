import React, { useEffect, useState } from "react";
import heroVideo from "../../assets/hero.mp4";
import logo from "../../assets/logo.png";
import gal1 from "../../assets/product1.webp";
import gal2 from "../../assets/product2.webp";
import gal3 from "../../assets/product3.webp";
import gal4 from "../../assets/product4.webp";
import gal5 from "../../assets/product5.webp";
import gal6 from "../../assets/product6.webp";
import gal7 from "../../assets/product7.webp";
import gal8 from "../../assets/product8.webp";
import gal9 from "../../assets/product9.webp";
import gal10 from "../../assets/product11.webp";
import underDev from "../../assets/under_dev.mp4"

export default function Home() {
    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showPopup]);

    const onClose = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div>
            {/* Under development popup */}
            {showPopup && (
                <section className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
                    {/* Backdrop */}
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black opacity-90"
                        onClick={onClose}
                    ></div>

                    {/* Popup Content */}
                    <div className="relative bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg z-50">
                        <video className="m-auto mb-4" muted autoPlay={true} loop={true} playsInline>
                            <source src={underDev} />
                        </video>
                        
                        
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
                        >
                            ✕
                        </button>

                        {/* Main Content */}
                        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
                            Under Development
                        </h2>
                        <p className="text-gray-600 text-center">
                            This website is under development. Stay tuned for
                            something amazing!
                        </p>
                    </div>
                </section>
            )}

            {/* home */}

            <section>
                <video
                    autoPlay={true}
                    muted
                    loop={true}
                    playsInline
                    preload="auto"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </section>

            {/* about */}
            <section className="my-12">
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
                            <p className="mb-8 leading-relaxed lg:mr-24 text-justify">
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
                            {/* <div className="flex justify-center my-6 md:my-0">
                                <button className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">
                                    Know More
                                </button>
                            </div> */}
                        </div>
                    </div>
                </section>
            </section>

            {/* add */}

            <section className="bg-secondary my-20">
                <section className="text-white body-font">
                    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col gap-10 md:gap-20 justify-center items-center">
                        {/* Left Section */}
                        <div className="text-center flex-1 max-w-sm">
                            <div className="text-xl font-semibold text-white mb-2">
                                Home-made products
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                From the Taste of Himalayas
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                Made with traditional methods
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="text-center flex-1 max-w-sm">
                            <div className="text-xl font-semibold text-white mb-2">
                                Certified by --
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                100% purely extracted by nature
                            </div>
                            <div className="text-xl font-semibold text-white mb-2">
                                None supplementary materials added
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
                    {/* Title Section */}
                    <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-black">
                            Visit Our Location
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Come explore our store and experience the finest
                            products, handcrafted with care and tradition. We’re
                            here to assist you in finding what you need.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Address Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Our Address
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Tularampur, Near Mahalaxmi Temple, Opp. Middas
                                Square, Haldwani, Uttarakhand 263139
                            </p>
                        </div>

                        {/* Hours Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Working Hours
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Monday - Friday: 9am - 5pm
                            </p>
                            <p className="mt-2 text-gray-600">
                                Saturday: 10am - 4pm
                            </p>
                            <p className="mt-2 text-gray-600">Sunday: Closed</p>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Contact
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Email:{" "}
                                <a
                                    href="mailto:Contact@himras.in"
                                    className="text-blue-500 hover:underline"
                                >
                                    Contact@himras.in
                                </a>
                            </p>
                            <p className="mt-2 text-gray-600">
                                Phone:{" "}
                                <a
                                    href="tel:+918077129142"
                                    className="text-blue-500 hover:underline"
                                >
                                    +91 8077129142
                                </a>
                            </p>
                            <p className="mt-2 text-gray-600">
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
                            <p className="mt-2 text-gray-600">
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
            </section>
        </div>
    );
}
