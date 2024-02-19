import React from "react";
import Container from "../Container/Container";
import admission from "../../assets/features/admission.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <Container>
      <div>
        <div className="my-24 flex justify-center items-center">
          <div className="w-1/2 mx-auto">
            <img src={admission} className="w-full h-[500px]" alt="" />
          </div>
          <div className="container w-1/2">
            <div className="image-container"></div>
            <div className="text-content">
              <h2
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="linear"
                className="text-3xl font-bold font-serif"
              >
                Apply For Admission
              </h2>
              <p
                data-aos="zoom-in"
                data-aos-duration="500"
                data-aos-easing="linear"
                className="font-semibold mt-8 text-lg"
              >
                Apply for admission is a great way to get a job in the field of
                web development. You can apply for admission by filling out the
                application form. If you're accepted, follow the enrollment
                procedures specified by the university. This may involve paying
                enrollment fees, attending orientation sessions, and registering
                for courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
