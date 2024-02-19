import React from "react";
import Container from "../Container/Container";
import course1 from "../../assets/inner/course1.png";
import course2 from "../../assets/inner/course2.jpg";

const Plugin = () => {
  return (
    <Container>
      <div className="mt-20 text-center">
        <div className="flex justify-center gap-5">
          <img
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            src={course1}
            className="w-52 shadow-xl"
            alt=""
          />
          <img
            data-aos="flip-left"
            data-aos-duration="500"
            data-aos-easing="linear"
            src={course2}
            className="w-52 shadow-xl"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-bold mt-14">ONLINE PREMIUM ADMISSION</h1>
          <p className="text-lg font-semibold text-gray-600 my-8">
            Please online admission now and enjoy life for study with us!
          </p>
          <h3 className="text-3xl font-bold">$3000 Value!</h3>
        </div>
      </div>
    </Container>
  );
};

export default Plugin;
