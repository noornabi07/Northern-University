import React from "react";
import Container from "../Container/Container";

import lates1 from "../../assets/inner/inner4.jpg";
import lates2 from "../../assets/inner/inner5.jpg";
import lates3 from "../../assets/inner/inner6.jpg";

const Latest = () => {
  return (
    <Container>
      <div className="my-20">
        <div className="text-center font-serif w-1/2 mx-auto mb-10">
          <h2 className="text-5xl font-bold mb-5">Latest News</h2>
          <p className="text-gray-600 font-semibold text-lg">
            Are you curious about life at Northern University? We invite you to
            immerse yourself in our vibrant campus community by scheduling a
            personalized campus visit!
          </p>
        </div>

        <div className="flex items-center justify-center gap-20">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="card  bg-base-100 shadow-xl"
          >
            <figure>
              <img className="w-[500px]" src={lates1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chairman Meeting</h2>
              <p>
                Meet with our experienced admissions advisors for personalized.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="card  bg-base-100 shadow-xl"
          >
            <figure>
              <img className="w-[500px]" src={lates2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Farewell Reception</h2>
              <p>
                Firewall reception involves the deployment and configuration.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-easing="linear"
            className="card  bg-base-100 shadow-xl"
          >
            <figure>
              <img src={lates3} className="w-[500px]" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Guest Farewall</h2>
              <p>Explore our beautiful campus accompanied</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Latest;
