import React from "react";
import service1 from "../../assets/major/service1.png";
import service2 from "../../assets/major/service2.png";
import service3 from "../../assets/major/service3.png";
import service4 from "../../assets/major/service4.png";
import Container from "../Container/Container";

import { FaComputer, FaHotel } from "react-icons/fa6";
import { FaBusAlt } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-base-200 py-8 md:py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-20 text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <FaComputer className="text-7xl font-bold mx-auto text-blue-500"></FaComputer>
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Online Class
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              Our online class is very easy to use and very customizable. Just
              one click and boom! We also have improved the
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <FaBusAlt className="text-7xl font-bold mx-auto text-blue-500"></FaBusAlt>
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Powerful Bus Services
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              Our bus services are very easy to use and very customizable. Just
              one click and boom! We also have improved the
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <FaHotel className="text-7xl font-bold mx-auto text-blue-500"></FaHotel>
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Delicious Cantine
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              Our cantine is very easy to use and very customizable. Just one
              click and boom! We also have improved the
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="linear"
          >
            <img src={service4} className="mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Best Teacher Support
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              We have dedicated support team with 5 years of experience in this
              field and we ensure that after you create a ticket, we will get
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
