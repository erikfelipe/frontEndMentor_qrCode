import React, { useState } from "react";
import qrCode from "../../assets/images/image-qr-code.png";
import "./style.css";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen qrcode_bg-color">
      <div className="p-4 bg-white flex flex-col items-center rounded-lg shadow-md">
        <div className="w-64 mx-auto">
          <img
            src={qrCode}
            alt="qrcode"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-64 text-lg mt-4">
          <div>
            <p className="font_Outfit-Bold mb-4">
              Improve your front-end skills by building projects
            </p>
          </div>
          <div>
            <p className="qrcode_h2fontcolor">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
