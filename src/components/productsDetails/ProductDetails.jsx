import React, { useEffect, useState } from "react";
import products from "../../Data/products";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    const { productId } = useParams();
    const [productData, setProductData] = useState();
    const [message, setMessage] = useState("");

    // To fetch user data
    useEffect(() => {
        const data = products.filter((product) => product.id === productId);
        setProductData(data);
    }, [productId, products]);

    // To fetch message
    useEffect(() => {
        const intialMessage = `Hey! I want to order : \n *${
            productData && productData[0].title
        }* *Rs. ${productData && productData[0].price}* *Quantity 1*`;

        const finalMessage = encodeURIComponent(intialMessage);
        setMessage(finalMessage);
    }, [productData]);

    // Cart functionality add data to cart
    const addToCart = () => {
        const cartData = JSON.parse(localStorage.getItem("Cart")) || [];
        
        const existingProductIndex = cartData.findIndex((item) => item.product[0].id === productData[0].id);
        
        if (existingProductIndex !== -1) {
            // Increasing quantity
            cartData[existingProductIndex].quantity += 1;
            // Increasing Price 
            cartData[existingProductIndex].price = cartData[existingProductIndex].quantity * productData[0].price 
        } else {
            // Adding data to local storage
            cartData.push({
                quantity: 1,
                price: productData[0].price,
                product: productData
            })
        }   

        localStorage.setItem("Cart", JSON.stringify(cartData));
    };

    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-36 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img
                            alt="product"
                            className="lg:w-1/2 w-full h-80 object-cover object-center rounded"
                            src={`${productData && productData[0].image}`}
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                height: "300px",
                            }} // Added inline styling for uniformity
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                HIMRAS
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 capitalize">
                                {productData && productData[0].title}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {/* Example rating */}
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 text-green-700"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">
                                        4 Reviews
                                    </span>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {productData && productData[0].description}
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    <span>&#8377;</span>
                                    {productData && productData[0].price}
                                </span>
                                <button
                                    className="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded"
                                    onClick={() =>
                                        addToCart()
                                    }
                                >
                                    Add to Cart
                                </button>
                                <a
                                    href={`https://wa.me/918077129142?text=${message}`}
                                    target="_blank"
                                >
                                    <button className="flex mx-6 text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded">
                                        Buy Now
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
