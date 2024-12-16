import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.png";
import searchIcon from "../../assets/search.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation();

    // Toggle the mobile menu
    const toggleMenu = () => setIsOpen(!isOpen);

    // Update cart count from localStorage
    useEffect(() => {
        const updateCartCount = () => {
            const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
            const totalCount = cartData.reduce(
                (acc, item) => acc + item.quantity,
                0
            );
            setCartCount(totalCount);
        };

        updateCartCount();
        const intervalId = setInterval(updateCartCount, 400);

        return () => clearInterval(intervalId);
    }, []);

    // Scroll event to manage fixed navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <header
            className={`w-full z-10 transition-all duration-300 ${
                isFixed
                    ? "fixed bg-white shadow-md top-0"
                    : "relative bg-primary"
            }`}
        >
            <nav className="flex items-center justify-between p-4 md:px-8">
                {/* Logo Section */}
                <Link to="/" className="flex items-center">
                    <img src={logo} className="w-[100px] h-[63px]" alt="Logo" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex gap-6 text-lg">
                    {["Home", "Shop", "About Us", "Blogs", "Contact Us"].map(
                        (item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item
                                    .toLowerCase()
                                    .replace(/\s+/g, "")}`}
                                className={`hover:text-green-900 transition-all font-semibold ${
                                    isActive(
                                        `/${item
                                            .toLowerCase()
                                            .replace(/\s+/g, "")}`
                                    )
                                        ? "text-green-600"
                                        : "text-black"
                                }`}
                            >
                                {item}
                            </NavLink>
                        )
                    )}
                </div>

                {/* Icons Section */}
                <div className="hidden md:flex items-center gap-6">
                    <img src={searchIcon} className="h-6 w-6" alt="Search" />
                    <NavLink to="/mycart" className="relative">
                        <img src={cartIcon} className="h-6 w-6" alt="Cart" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </NavLink>

                    <li className="list-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-user"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </li>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="sm:hidden text-black focus:outline-none z-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-primary text-white transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out sm:hidden`}
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8 text-xl">
                    {["Home", "Shop", "My Cart"].map((item, index) => (
                        <li key={index} onClick={toggleMenu}>
                            <NavLink
                                to={`/${item
                                    .toLowerCase()
                                    .replace(/\s+/g, "")}`}
                                className={`hover:text-green-800 ${
                                    isActive(`/${item.toLowerCase()}`)
                                        ? "text-green-600"
                                        : "text-black"
                                }`}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {/* Close Button */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6  focus:outline-none"
                >
                </button>
            </div>
        </header>
    );
}
