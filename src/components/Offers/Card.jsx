import React from "react";

const Card = ({ titles, description, icon }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="500"
      data-aos-easing="linear"
      className="w-full px-4 md:px-12 md:py-10 h-auto md:h-80 rounded-lg shadow-xl flex items-center  group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] 
     duration-100"
    >
      <div className="h-72 overflow-y-hidden cursor-pointer p-4">
        <div className="flex h-full flex-col gap-5 translate-y-14 group-hover:translate-y-0 group-hover:text-white  transition-transform duration-500">
          <div>
            <span className="text-5xl">{icon}</span>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl  font-bold ">
              {titles}
            </h2>
            <p className=" font-serif">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
