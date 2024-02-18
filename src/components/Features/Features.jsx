import React from 'react';
import Container from '../Container/Container';
import {
  FaMobileAlt,
  FaArrowsAltH,
  FaPen,
  FaPagelines,
  FaArrowDown,
  FaPlayCircle,
  FaFacebookF,
  FaSearch,
} from "react-icons/fa";
import { GrUpdate, GrDocumentStore, GrGallery } from "react-icons/gr";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineSettings, MdSettingsInputAntenna } from "react-icons/md";
import { FaRegEye, FaArrowsToDot } from "react-icons/fa6";
import { LuPanelTopOpen } from "react-icons/lu";
import { SiDungeonsanddragons } from "react-icons/si";
import { BsGoogle, BsLayoutTextSidebar } from "react-icons/bs";

const Features = () => {
  return (
    <Container>
      <div className="my-20">
        <h2 className="text-center font-bold text-5xl">Core Features</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-5 justify-center gap-16  mx-5 md:mx-10 lg:mx-40 xl:mx-96">
          <div className="text-center">
            <FaMobileAlt className="text-5xl font-bold text-gray-600 mx-auto"></FaMobileAlt>
            <p className="text-sm md:text-lg font-bold mt-3 text-gray-600">
              Fully Responsive
            </p>
          </div>
          <div className="text-center">
            <GrUpdate className="text-5xl font-bold mx-auto text-gray-600"></GrUpdate>
            <p className="text-sm md:text-lg font-bold mt-3 text-gray-600">
              Automatic Updates
            </p>
          </div>
          <div className="text-center">
            <FaArrowsAltH className="text-5xl font-bold mx-auto text-gray-600"></FaArrowsAltH>
            <p className="text-lg font-bold mt-3 text-gray-600">
              100% Fluid Layout
            </p>
          </div>
          <div className="text-center">
            <RiComputerLine className="text-5xl font-bold mx-auto text-gray-600"></RiComputerLine>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Boxed/Full Container
            </p>
          </div>
          <div className="text-center">
            <FaPen className="text-5xl font-bold mx-auto text-gray-600"></FaPen>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Amazing Designs
            </p>
          </div>
          <div className="text-center">
            <MdOutlineSettings className="text-5xl font-bold mx-auto text-gray-600"></MdOutlineSettings>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Advanced Admin Panel
            </p>
          </div>
          <div className="text-center">
            <FaRegEye className="text-5xl font-bold mx-auto text-gray-600"></FaRegEye>
            <p className="text-lg font-bold mt-3 text-gray-600">
              WP Live Customize
            </p>
          </div>
          <div className="text-center">
            <MdSettingsInputAntenna className="text-5xl font-bold mx-auto text-gray-600"></MdSettingsInputAntenna>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Enable maintenance mode
            </p>
          </div>
          <div className="text-center">
            <LuPanelTopOpen className="text-5xl font-bold mx-auto text-gray-600"></LuPanelTopOpen>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Export admin panel setting
            </p>
          </div>
          <div className="text-center">
            <FaPagelines className="text-5xl font-bold mx-auto text-gray-600"></FaPagelines>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Export custom page builder template
            </p>
          </div>
          <div className="text-center">
            <SiDungeonsanddragons className="text-5xl font-bold mx-auto text-gray-600"></SiDungeonsanddragons>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Drag Drop Page Builder
            </p>
          </div>
          <div className="text-center">
            <FaArrowDown className="text-5xl font-bold mx-auto text-gray-600"></FaArrowDown>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Parallax Background
            </p>
          </div>
          <div className="text-center">
            <FaArrowsToDot className="text-5xl font-bold mx-auto text-gray-600"></FaArrowsToDot>
            <p className="text-lg font-bold mt-3 text-gray-600">Best Support</p>
          </div>
          <div className="text-center">
            <GrDocumentStore className="text-5xl font-bold mx-auto text-gray-600"></GrDocumentStore>
            <p className="text-lg font-bold mt-3 text-gray-600">
              In-Depth Documentation
            </p>
          </div>
          <div className="text-center">
            <FaPlayCircle className="text-5xl font-bold mx-auto text-gray-600"></FaPlayCircle>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Video Tutorial
            </p>
          </div>
          <div className="text-center">
            <BsGoogle className="text-5xl font-bold mx-auto text-gray-600"></BsGoogle>
            <p className="text-lg font-bold mt-3 text-gray-600">Google Fonts</p>
          </div>
          <div className="text-center">
            <FaFacebookF className="text-5xl font-bold mx-auto text-gray-600"></FaFacebookF>
            <p className="text-lg font-bold mt-3 text-gray-600">
              Social Media Elements
            </p>
          </div>
          <div className="text-center">
            <FaSearch className="text-5xl font-bold mx-auto text-gray-600"></FaSearch>
            <p className="text-lg font-bold mt-3 text-gray-600">
              SEO Optimization
            </p>
          </div>
          <div className="text-center">
            <GrGallery className="text-5xl font-bold mx-auto text-gray-600"></GrGallery>
            <p className="text-lg font-bold mt-3 text-gray-600">
              6 Gallery Layouts
            </p>
          </div>
          <div className="text-center">
            <BsLayoutTextSidebar className="text-5xl font-bold mx-auto text-gray-600"></BsLayoutTextSidebar>
            <p className="text-lg font-bold mt-3 text-gray-600">
              14 Blog Layouts
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Features;