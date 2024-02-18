import React from "react";
import Container from "../Container/Container";

// marquee image

import marq1 from "../../assets/marq1.png";
import marq2 from "../../assets/marq2.png";
import marq3 from "../../assets/marq3.png";
import marq4 from "../../assets/marq4.png";
import marq5 from "../../assets/marq5.png";
import marq6 from "../../assets/marq6.png";
import marq7 from "../../assets/marq7.png";
import marq8 from "../../assets/marq8.png";
import marq9 from "../../assets/marq9.png";
import marq10 from "../../assets/marq10.png";
import marq11 from "../../assets/marq11.png";
import marq12 from "../../assets/marq12.png";
import marq13 from "../../assets/marq13.jpg";
import marq14 from "../../assets/marq14.png";
import marq15 from "../../assets/marq15.jpg";

import demo1 from "../../assets/demos1.jpg";
import demo2 from "../../assets/demos2.jpg";
import demo3 from "../../assets/demos3.jpg";
import demo4 from "../../assets/demos4.jpg";
import demo5 from "../../assets/demos5.jpg";
import demo6 from "../../assets/demos6.jpg";
import demo7 from "../../assets/demos7.jpg";

const Demons = () => {
  return (
    <Container>
      <marquee behavior="" direction="row">
        <div className="flex flex-grow gap-6 mt-10">
          <img src={marq1} className="h-16" alt="" />
          <img src={marq2} className="h-16" alt="" />
          <img src={marq3} className="h-16" alt="" />
          <img src={marq4} className="h-16" alt="" />
          <img src={marq5} className="h-16" alt="" />
          <img src={marq6} className="h-16" alt="" />
          <img src={marq7} className="h-16" alt="" />
          <img src={marq8} className="h-16" alt="" />
          <img src={marq9} className="h-16" alt="" />
          <img src={marq10} className="h-16" alt="" />
          <img src={marq11} className="h-16" alt="" />
          <img src={marq12} className="h-16" alt="" />
          <img src={marq13} className="h-16" alt="" />
          <img src={marq14} className="h-16" alt="" />
          <img src={marq15} className="h-16" alt="" />
        </div>
      </marquee>

      {/* LMS Demo */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 justify-center items-center">
        <div></div>
        <div className="text-center hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo1} className="shadow-xl mx-auto
          " alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            Online School
          </p>
        </div>
        <div className="text-center hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo2} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            Online Academy
          </p>
        </div>
        <div></div>
      </div>

      {/* Standard Demo */}
      <div>
        <h1 className="text-center text-4xl font-bold mt-20">
          Standard Admission
        </h1>
      </div>
      <div className="md:flex flex-grow justify-center mt-10 items-center gap-8">
        <div></div>
        <div className="text-center md:w-1/4 hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo3} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            University Basic
          </p>
        </div>
        <div className="text-center md:w-1/4 hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo4} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5  text-blue-600">
            University Standard
          </p>
        </div>
        <div className="text-center md:w-1/4 hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo5} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            University Premium
          </p>
        </div>
        <div></div>
      </div>

      {/* High School */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 justify-center items-center">
        <div></div>
        <div className="text-center hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo6} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            High School
          </p>
        </div>
        <div className="text-center hover:scale-105 hover:duration-300 cursor-pointer">
          <img src={demo7} className="shadow-xl mx-auto" alt="" />
          <p className="text-2xl font-semibold mt-5 text-blue-600">
            Kindergarten
          </p>
        </div>
        <div></div>
      </div>
    </Container>
  );
};

export default Demons;
