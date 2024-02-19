import React from "react";
import builder from "../../assets/builder.png";
import Container from "../Container/Container";
import open from '../../assets/open.png'

const Builder = () => {
  return (
    <Container>
      <div className="md:flex justify-center text-center md:gap-20 items-center">
        <div className="w-1/2 mx-auto text-center">
          <h2 className="text-5xl font-bold font-serif">Northern About Us</h2>
          <h4 className="text-2xl font-bold text-gray-400 mt-5 font-serif">
            The most powerful about
          </h4>
          <img src={open} className="w-20 my-16 mx-auto" alt="" />
          <p className="text-xl font-semibold font-serif">
            In the verdant hills of Bangladesh's north, Northern University
            proudly holds its course. With faculties diverse and academic might,
            It fosters excellence, igniting futures bright. Nurturing talents
            amidst nature's embrace, Its halls resonate with scholarly grace.
            From economics to arts, science to law, Northern University stands
            tall, without flaw.
          </p>
          <h4 className="my-8 text-xl font-bold font-sans">
            Prof. Dr. Abu Yousuf Md. Abdullah
          </h4>

          <button className="py-3 px-8 font-semibold bg-green-500 text-white">
            Watch Video
          </button>
        </div>
        <div>
          <img
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            src={builder}
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Builder;
