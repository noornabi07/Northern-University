import React from "react";
import service1 from "../../assets/major/service1.png";
import service2 from "../../assets/major/service2.png";
import service3 from "../../assets/major/service3.png";
import service4 from "../../assets/major/service4.png";
import Container from "../Container/Container";

const Services = () => {
  return (
    <div className="bg-base-200 my-10 py-8 md:py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-20 text-center">
          <div>
            <img src={service1} className="mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Fully Responsive
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              Your website will not just work on desktop but will look good on
              any major devices such as tablet, smart phone. The width will be
              automatically scaled by your screen size.
            </p>
          </div>
          <div>
            <img src={service2} className="mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Powerful Admin Panel
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              You can do almost everything from admin panel. Such as change
              site’s layout, change header style, change colros, create custom
              skin, export customer page builder template, etc.
            </p>
          </div>
          <div>
            <img src={service3} className="mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Import Demo Site
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              GoodLayers’ demo importer is very easy to use and very
              customizable. Just one click and boom! We also have improved the
              way to import demo images to make it even faster!
            </p>
          </div>
          <div>
            <img src={service4} className="mx-auto" alt="" />
            <h2 className="text-xl font-bold text-gray-800 my-8">
              Best Support Team
            </h2>
            <p className="text-lg font-semibold font-serif text-gray-500">
              We have dedicated support team with 5 years of experience in this
              field and we ensure that after you create a ticket, we will get
              back to you within 12-14 hours(in business day).
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
