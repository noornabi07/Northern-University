import React from "react";
import Container from "../Container/Container";

const Features = () => {
  return (
    
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/4NpyZKV/banner1.png)",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold font-serif">Visit Our University</h1>
            <p className="mb-5 font-serif">
              Explore our beautiful campus accompanied by one of our
              knowledgeable student guides. Get an up-close look at our academic
              buildings, state-of-the-art facilities, residence halls, and more.
            </p>
            <button className="btn btn-primary font-semibold font-serif text-lg">Visit Now</button>
          </div>
        </div>
      </div>
    
  );
};

export default Features;
