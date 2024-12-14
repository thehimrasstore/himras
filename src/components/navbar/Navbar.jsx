import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.png";
import searchIcon from "../../assets/search.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [lsCartData, setLSCartData] = useState(
        JSON.parse(localStorage.getItem("Cart")) || []
    );
    const [cartCount, setCartCount] = useState(lsCartData.length);
    const location = useLocation();

  const isActive = (path) => location.pathname === path;

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Update cart count when local storage data changes
    useEffect(() => {
        const updateCartCount = () => {
            const updatedCartData =
                JSON.parse(localStorage.getItem("Cart")) || [];

            const totalCount = updatedCartData.reduce(
                (acc, item) => acc + item.quantity,
                0
            );

            setCartCount(totalCount);
        };

        updateCartCount();

        const intervalId = setInterval(updateCartCount, 400);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <header className="shadow-md w-full top-0 bg-primary z-10">
            <nav className="flex items-center justify-between p-4 md:px-8">
                <div className="flex justify-center items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            className="w-20 h-16"
                            alt="himras-logo"
                        />
                    </Link>
                </div>

                <div className="hidden md:flex items-center justify-center md:justify-start p-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 rounded-3xl w-[300px] focus:outline-none text-[14px]"
                    />
                    <img
                        src={searchIcon}
                        className="h-5 w-5 ml-2"
                        alt="Search Icon"
                    />
                </div>

                {/* For larger devices */}
                <div className="hidden sm:block sm:w-[40%] md:w-[20%]">
                    <ul className="flex justify-between items-center text-[20px]">
                        <li>
                            <NavLink
                                to="/"
                                className={`hover:text-green-900 transition-[.2s] ${
                                    isActive("/") ? "isActive" : "text-black"
                                }`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/shop"
                                className={`hover:text-green-900 transition-[.2s] ${
                                    isActive("/shop") ? "isActive" : "text-black"
                                }`}
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li className="relative flex items-center">
                            {/* Cart icon with counter */}
                            <NavLink to="/mycart" className="relative">
                                <img
                                    src={cartIcon}
                                    className="h-8 w-8"
                                    alt="Cart Icon"
                                />
                                {cartCount > 0 && (
                                    <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                                        {cartCount}
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* For Smaller Devices */}
                <div className="block sm:hidden z-50">
                    <div onClick={toggleMenu}>
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
                            className="lucide lucide-menu"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </div>

                    {/* Navigation page */}
                    <div
                        className={`${
                            isOpen ? "block" : "hidden"
                        } fixed h-screen w-screen bg-primary top-0 left-0`}
                    >
                        <ul className="h-full w-full flex justify-center items-center flex-col gap-10 font-semibold text-[24px]">
                            <li onClick={toggleMenu}>
                                <NavLink className={isActive("/") ? "isActive" : "text-black"} to="/" >Home</NavLink>
                            </li>
                            <li onClick={toggleMenu}>
                                <NavLink className={isActive("/shop") ? "isActive" : "text-black"} to="/shop">Shop</NavLink>
                            </li>
                            <li onClick={toggleMenu}>
                                <NavLink className={isActive("/mycart") ? "isActive" : "text-black"} to="/mycart">My Cart</NavLink>
                            </li>
                        </ul>

                        <div
                            className="relative top-[-90%] left-[85%]"
                            onClick={toggleMenu}
                        >
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
                                className="lucide lucide-circle-x"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
