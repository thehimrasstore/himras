import React from "react";

export default function Footer() {
    return (
        <div>
            {/* footer */}

            <footer className="bg-secondary text-primary py-4 mt-4 shadow  ">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between text-center md:text-left">
                    <span className="text-sm ">
                        © 2024{" "}
                        <a
                            href="https://himras.com/"
                            className="hover:underline"
                        >
                            Himras
                        </a>
                        . All Rights Reserved. <br /> Under development - We’re
                        currently upgrading this page.{" "}
                        <a className="underline text-blue-400" target="_blank" href="https://wa.me/918077129142">
                            Report an issue
                        </a>
                    </span>
                    <ul className="flex flex-wrap justify-center md:justify-start items-center mt-3 text-sm font-medium sm:mt-2">
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:underline me-4 md:me-6"
                            >
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}
