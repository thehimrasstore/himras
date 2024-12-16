import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../Data/products";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { productId } = useParams();
    const [productData, setProductData] = useState();
    const [message, setMessage] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    // Fetch product data
    useEffect(() => {
        const data = products.filter((product) => product.id === productId);
        setProductData(data);
    }, [productId]);

    // Update message for WhatsApp
    useEffect(() => {
        if (productData && productData.length > 0) {
            const initialMessage = `Hey! I want to order: \n ● ${productData[0].title} ₹${productData[0].price} (x${quantity}) \n *Total: ₹${productData[0].price * quantity}*`;
            const finalMessage = encodeURIComponent(initialMessage);
            setMessage(finalMessage);
        }
    }, [productData, quantity]);

    // Add to Cart functionality
    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
        const existingProductIndex = cartData.findIndex(
            (item) => item.product[0].id === productData[0].id
        );

        if (existingProductIndex !== -1) {
            cartData[existingProductIndex].quantity += quantity;
            cartData[existingProductIndex].price =
                cartData[existingProductIndex].quantity * productData[0].price;
        } else {
            cartData.push({
                quantity,
                price: productData[0].price * quantity,
                product: productData,
            });
        }

        localStorage.setItem("Cart", JSON.stringify(cartData));
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
    };

    const handleIncreaseQuantity = () => setQuantity(quantity + 1);
    const handleDecreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div>
            {showPopup && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                    Product added to cart!
                </div>
            )}
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container mx-auto px-5 py-12">
                    <button
                        className="mb-4 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 flex gap-1"
                        onClick={() => navigate(-1)}
                    >
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
                            className="lucide lucide-chevron-left"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        Back to Previous Page
                    </button>
                    <div className="flex flex-wrap lg:flex-nowrap">
                        <img
                            alt="product"
                            className="lg:w-1/2 w-full object-contain object-center"
                            src={productData && productData[0]?.image}
                            style={{ height: "300px" }}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                                Himras
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-semibold mb-4 capitalize">
                                {productData && productData[0]?.title}
                            </h1>
                            <p className="leading-relaxed text-justify mb-4">
                                {productData && productData[0]?.description}
                            </p>
                            <div className="flex items-center pb-5 border-b border-gray-200 mb-5">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    ₹{productData && productData[0]?.price}
                                </span>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <button
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                                    onClick={handleDecreaseQuantity}
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium">{quantity}</span>
                                <button
                                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded"
                                    onClick={handleIncreaseQuantity}
                                >
                                    +
                                </button>
                            </div>
                            <div className="flex gap-4">
                                <button
                                    className="flex-grow text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </button>
                                <a
                                    href={`https://wa.me/918077129142?text=${message}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-grow"
                                >
                                    <button className="w-full text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded">
                                        Buy Now
                                    </button>
                                </a>
                            </div>
                            {/* Notice Section */}
                            <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700 rounded">
                                <h3 className="font-bold mb-2">Note:</h3>
                                <p className="text-sm leading-6">
                                    Our products are not eligible for returns. They are created by or
                                    procured from small and marginal farmers. However, in the event of
                                    your receiving a damaged product, please email a photograph of the
                                    said product to us at
                                    <a
                                        href="mailto:contact@himras.in"
                                        className="text-blue-600 underline mx-1"
                                    >
                                        contact@himras.in
                                    </a>
                                    within 48 hours of receiving your order.
                                </p>
                                <p className="text-sm mt-2">
                                    Our team will get back with a resolution at the earliest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
