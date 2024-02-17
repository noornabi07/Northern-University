import React from "react";
import Container from "../Container/Container";
import react from "../../assets/inner/react.png";
import java from "../../assets/inner/javascript.png";

const Plugin = () => {
  return (
    <Container>
      <div className="mt-20 text-center">
        <div className="flex justify-center gap-5">
          <img src={react} className="w-52" alt="" />
          <img src={java} className="w-52" alt="" />
        </div>
        <div>
          <h1 className="text-5xl font-bold mt-14">FREE PREMIUM PLUGINS</h1>
          <p className="text-lg font-semibold text-gray-600 my-8">
            Enjoy free Revolution Slider WP Plugin, LightGallery lightbox Plugin
          </p>
          <h3 className="text-3xl font-bold">$37 Value!</h3>
        </div>
      </div>
    </Container>
  );
};

export default Plugin;
