import React from "react";
import major1 from '../../assets/major/major1.png'
import major2 from '../../assets/major/major2.png'
import major3 from '../../assets/major/major3.png'
import major4 from '../../assets/major/major4.png'

const Major = () => {
  return (
    <div className="my-20">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url(https://i.ibb.co/mt0x8D9/banner3.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              Compatible With Major Plugins
            </h1>
            <p className="mb-5 font-bold text-lg md:text-xl">
              Northern University is great better then others UNV
            </p>

            {/* major category */}
            <div className="md:flex flex-row justify-center items-center gap-10 mt-12">
              <div className="flex items-center gap-5">
                <img src={major1} alt="" />
                <span className="text-2xl font-bold">Yoast SEO</span>
              </div>
              <div className="flex items-center gap-5">
                <img src={major2} alt="" />
                <span className="text-2xl font-bold">All in One SEO</span>
              </div>
              <div className="flex items-center gap-5">
                <img src={major3} alt="" />
                <span className="text-2xl font-bold">W3 Total Cache</span>
              </div>
              <div className="flex items-center gap-5">
                <img src={major4} alt="" />
                <span className="text-2xl font-bold">Contact Form 7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
