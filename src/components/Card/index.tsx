import React from "react";
import qrCode from "../../assets/images/image-qr-code.png";
import "./style.css";

const Card = () => {
  return (
    <div className="flex justify-center items-center h-screen qrcode_bg-color">
      <div className="p-4 bg-white flex flex-col items-center rounded-lg shadow-md">
        <div className="w-72 mx-auto">
          <img
            src={qrCode}
            alt="qrcode"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="w-72 mt-4 px-4">
          <div>
            <p className="font_Outfit-Bold mb-4 text-xl">
              Improve your front-end skills by building projects
            </p>
          </div>
          <div>
            <p className="qrcode_h2fontcolor text-lg">
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
