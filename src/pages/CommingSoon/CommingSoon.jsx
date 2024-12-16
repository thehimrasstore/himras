import React from "react";

export default function ComingSoon() {
    return (
        <div
            className="flex items-center justify-center h-screen w-full bg-primary bg-cover bg-center"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1920x1080/?nature,sky')",
            }}
        >
            <div className="text-center text-gray-800 px-4">
                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                    Coming Soon
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-2xl animate-fade-in">
                    Something amazing is on the way!
                </p>
            </div>
        </div>
    );
}
