import React from "react";
import builder from "../../assets/builder.png";
import Container from "../Container/Container";
import open from '../../assets/open.png'

const Builder = () => {
  return (
    <Container>
      <div className="md:flex justify-center text-center md:gap-20 items-center">
        <div className="w-1/2 mx-auto text-center">
          <h2 className="text-5xl font-bold font-serif">GoodLayers’ Page Builder</h2>
          <h4 className="text-2xl font-bold text-gray-400 mt-5 font-serif">Simply the most powerful content builder.</h4>
          <img src={open} className="w-20 my-16 mx-auto" alt="" />
          <p className="text-xl font-semibold font-serif">
            Thanks to the huge selection of page templates and layouts, you can
            mix and match the different options to create your own custom
            design. The powerful page builder tool is on hand to help you carry
            out any more extensive customization work.
          </p>
          <h4 className="my-8 text-xl font-bold font-sans">Joe Fylan, Colorlib Review Team</h4>

          <button className="py-3 px-8 font-semibold bg-green-500 text-white">Watch Video</button>
        </div>
        <div>
          <img src={builder} className="w-full" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Builder;
