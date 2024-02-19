import React from "react";
import Card from "./Card";
import { MdWeb, MdDeveloperBoard, MdSupport } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { ImMobile } from "react-icons/im";
import { FaShopify } from "react-icons/fa";
import Container from "../Container/Container";
const Offers = () => {
  return (
    <Container>
      <div  className="w-full pb-20  text-black opacity-95 rounded-lg my-40 text-lightText p-20 border-b-black">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold font-serif">What We Offer</h2>
          <p className="w-1/3 mx-auto mt-4 font-semibold font-serif">
            Immerse yourself in a vibrant campus community where you'll have
            countless opportunities to engage in extracurricular activities,
            clubs, and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5 md:gap-20">
          <Card
            titles="Online Class"
            description="Web design refers to the process of creating the visual layout, appearance, and overall aesthetics of a website. It involves planning and designing the various elements that users see and interact with when they visit a website. Web design is crucial for creating an engaging."
            icon={<MdWeb></MdWeb>}
          ></Card>

          <Card
            titles="Creativity Competition"
            description="Collaborating with clients and stakeholders to create wireframes, mockups, and prototypes that outline the visual and interactive aspects of the website or application. UI designers consider factors such as usability."
            icon={<SiAntdesign></SiAntdesign>}
          ></Card>

          <Card
            titles="Group Class"
            description="Implementing the designs using HTML, CSS, and JavaScript to build the user-facing portion of the website. Front-end development refers to the process of building and implementing the user-facing. "
            icon={<MdDeveloperBoard></MdDeveloperBoard>}
          ></Card>

          <Card
            titles="Contact Friends"
            description="Ensuring websites are optimized for various screen sizes and devices, including smartphones and tablets"
            icon={<ImMobile></ImMobile>}
          ></Card>

          <Card
            titles="Ceremony Songs"
            description="Creating online stores and shopping cart systems to facilitate online sales, often involving payment gateway integration and inventory management."
            icon={<FaShopify></FaShopify>}
          ></Card>

          <Card
            titles="Problem Support"
            description="Providing ongoing updates, bug fixes, and technical support for existing websites."
            icon={<MdSupport></MdSupport>}
          ></Card>
        </div>
      </div>
    </Container>
  );
};

export default Offers;
