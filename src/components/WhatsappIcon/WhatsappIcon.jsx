import React from "react";
import icon from "../../assets/whatsappIcon.png";

const WhatsappIcon = () => {
    return (
        <div className="fixed bottom-4 right-4">
            <a href="https://wa.me/918077129142" target="_blank">
                <img className="w-14 h-14" src={icon} alt="" />
            </a>
        </div>
    );
};

export default WhatsappIcon;
