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
import underDev from "../../assets/under_dev.mp4";
import { Link } from "react-router-dom";
import icon from "../../assets/whatsappIcon.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
    const [showPopup, setShowPopup] = useState(true);
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.5 });
    const [womenArtisans, setWomenArtisans] = useState(0);
    const [earningsPercent, setEarningsPercent] = useState(0);

    const numberVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (targetNumber) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },

            transitionEnd: {
                textContent: targetNumber,
            },
        }),
    };

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

    useEffect(() => {
        if (inView) {
            controls.start("visible");

            // Animate numbers when in view
            const animateNumber = (setter, target, duration) => {
                let start = 0;
                const increment = target / (duration / 50); // Update every 50ms
                const timer = setInterval(() => {
                    start += increment;
                    if (start >= target) {
                        setter(target);
                        clearInterval(timer);
                    } else {
                        setter(Math.floor(start));
                    }
                }, 50);
            };

            animateNumber(setWomenArtisans, 100, 2000); // Animate to 100 over 2 seconds
            animateNumber(setEarningsPercent, 100, 2000); // Animate to 100 over 2 seconds
        }
    }, [inView, controls]);

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
                        <video
                            className="m-auto mb-4"
                            muted
                            autoPlay={true}
                            loop={true}
                            playsInline
                        >
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

            <a
                className="fixed right-4 bottom-4"
                href={`https://wa.me/918077129142?text=Hi!!`}
                target="_blank"
            >
                <img className="w-14 h-14" src={icon} alt="" />
            </a>

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
                    <h2 className="text-center text-4xl mb-8">
                        Join the{" "}
                        <span className="font-bold text-green-900">
                            HIM-RAS
                        </span>{" "}
                        Movement
                    </h2>
                    <div className="container mx-auto flex px-5  md:flex-row flex-col items-center text-lg">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img
                                className="object-cover object-center rounded"
                                alt="hero"
                                src={logo}
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <p className="mb-2 leading-relaxed lg:mr-24 ">
                                By supporting HIMRAS, you’re doing more than
                                purchasing exceptional products — you’re making
                                a difference. <br />{" "}
                                <span className="font-semibold">
                                    Together, we:
                                </span>
                            </p>
                            <ul className="ml-10 list-disc mb-10">
                                <li>
                                    Provide a platform for women artisans to
                                    thrive independently.
                                </li>
                                <li>
                                    Protect traditional crafts and recipes from
                                    the Himalayan region.
                                </li>
                                <li>
                                    Promote eco-conscious living for a
                                    sustainable future.
                                </li>
                            </ul>

                            <div className="flex justify-center my-6 md:my-0">
                                <Link
                                    to="/shop"
                                    className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg"
                                >
                                    Shop Now!
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Our Impact */}

            <section className="bg-secondary bg-no-repeat bg-cover my-20">
                <section className="text-white body-font">
                    <div
                        className="container mx-auto flex px-5 py-10 flex-col gap-8 justify-center items-center"
                        ref={ref}
                    >
                        <h1 className="text-[60px] mx-auto text-center underline-style">
                            Our Impact
                        </h1>

                        <ul className="text-center w-full text-[26px] leading-[2]">
                            <li>
                                <motion.span
                                    className="text-primary"
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: { duration: 0.5 },
                                        },
                                    }}
                                >
                                    {womenArtisans}
                                </motion.span>
                                + Women Artisans empowered to achieve financial
                                independence.
                            </li>
                            <li>
                                Helping SHGs retain{" "}
                                <motion.span
                                    className="text-primary"
                                    initial={{ opacity: 0 }}
                                    animate={controls}
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            transition: { duration: 0.5 },
                                        },
                                    }}
                                >
                                    {earningsPercent}
                                </motion.span>
                                % of earnings by eliminating middlemen.
                            </li>
                            <li>
                                Supported sustainability efforts with
                                eco-friendly practices and packaging.
                            </li>
                        </ul>
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
                            Shop Online Anytime, Anywhere
                        </h2>
                        <p className="mt-4 text-lg text-gray-700">
                            Discover and shop our collection of Himalayan
                            treasures at your convenience. HIMRAS is a
                            completely online store, bringing the best of
                            Uttarakhand to your doorstep.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Address Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Our address :
                            </h3>
                            <p className="mt-4 text-gray-600">
                                Bareilly Road, Beriparao, Motahaldu, Haldwani,
                                Uttarakhand 263139
                            </p>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Reach us at :
                            </h3>
                            <p className="mt-4 text-gray-600 flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    />
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                </svg>{" "}
                                <a
                                    href="mailto:Contact@himras.in"
                                    className="text-blue-500 hover:underline"
                                >
                                    Contact@himras.in
                                </a>
                            </p>
                            <p className="mt-2 text-gray-600 flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-linkedin"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>{" "}
                                <a
                                    href="https://www.linkedin.com/company/himras/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Himras
                                </a>
                            </p>
                            <p className="mt-2 text-gray-600 flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-instagram"
                                >
                                    <rect
                                        width="20"
                                        height="20"
                                        x="2"
                                        y="2"
                                        rx="5"
                                        ry="5"
                                    />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line
                                        x1="17.5"
                                        x2="17.51"
                                        y1="6.5"
                                        y2="6.5"
                                    />
                                </svg>{" "}
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

                        {/* Hours Card */}
                        <div className="bg-primary rounded-lg shadow-md p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                For more details :
                            </h3>
                            <p className="mt-4 text-gray-600 flex gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-phone"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <a
                                    href="tel:+918077129142"
                                    className="text-blue-500 hover:underline"
                                >
                                    +91 8077129142
                                </a>
                            </p>
                            <p className="mt-2 text-gray-600 pl-8">
                                09:30 AM - 5:00 PM <br /> (Mon-Sat)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
