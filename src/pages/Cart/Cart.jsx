import React, { useState, useEffect } from "react";

const Cart = () => {
    const [whatsappLinkButton, setWhatsappLinkButton] = useState("");

    const getCartData = () =>
        JSON.parse(localStorage.getItem("Cart")) || [];

    const [cartItems, setCartItems] = useState(getCartData());

    const calculateTotal = () => {
        return cartItems.reduce(
            (total, item) =>
                total +
                item.quantity * parseFloat(item.product[0].price),
            0
        );
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return; // Prevent negative or zero quantities
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.product[0].id === id
                    ? {
                          ...item,
                          quantity,
                          price: parseFloat(item.product[0].price) * quantity,
                      }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.product[0].id !== id)
        );
    };

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cartItems));

        const initialMessage = `Hey! I want to order:\n`;
        const orderList = cartItems
            .map((item) => {
                const product = item.product[0];
                return `- ${product.title} (x${item.quantity}): ₹${(
                    item.quantity * parseFloat(product.price)
                ).toFixed(2)}`;
            })
            .join("\n");

        const totalMessage = `\n\nTotal: ₹${cartItems
            .reduce(
                (total, item) =>
                    total + item.quantity * parseFloat(item.product[0].price),
                0
            )
            .toFixed(2)}`;

        const fullMessage = initialMessage + orderList + totalMessage;

        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappLink = `https://wa.me/918077129142?text=${encodedMessage}`;

        setWhatsappLinkButton(whatsappLink);
    }, [cartItems]);

    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-100 p-4">
            <header className="flex justify-center items-center py-6">
                <h2 className="text-3xl font-semibold text-center">Your Shopping Cart</h2>
            </header>

            <main className="flex flex-col flex-grow items-center">
                {cartItems.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <p className="text-xl">Your cart is empty!</p>
                        <p className="mt-4 text-lg">Start shopping to add items here.</p>
                    </div>
                ) : (
                    <div className="w-full max-w-4xl px-2">
                        <ul>
                            {cartItems.map((item) => {
                                const product = item.product[0];
                                return (
                                    <li
                                        key={product.id}
                                        className="flex flex-col md:flex-row items-center justify-between py-6 border-b border-gray-300 gap-4"
                                    >
                                        <div className="flex items-center w-full md:w-auto">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="w-24 h-24 md:w-32 md:h-32 object-cover mr-4 rounded-lg shadow-md"
                                            />
                                            <div className="text-center md:text-left">
                                                <h3 className="text-lg md:text-xl font-medium text-gray-800">
                                                    {product.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">
                                                    ₹{parseFloat(product.price).toFixed(2)} each
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full md:w-auto justify-between md:justify-end space-x-4">
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    updateQuantity(
                                                        product.id,
                                                        parseInt(e.target.value)
                                                    )
                                                }
                                                className="w-16 text-center border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-primary transition"
                                            />
                                            <button
                                                onClick={() => removeItem(product.id)}
                                                className="text-red-500 hover:text-red-700 transition duration-200"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="font-semibold text-xl md:text-2xl text-center md:text-left">
                                Total: ₹{calculateTotal().toFixed(2)}
                            </div>
                            <a
                                className="bg-green-600 text-white py-3 px-8 rounded-lg text-center hover:bg-green-700 transition duration-300"
                                href={whatsappLinkButton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Buy with WhatsApp
                            </a>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Cart;