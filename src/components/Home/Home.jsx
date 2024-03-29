import React from "react";
import Banner from "../Banner/Banner";
import Demons from "../Demons/Demons";
import Featured from "../Featured/Featured";
import InnerPage from "../InnerPage/InnerPage";
import Plugin from "../Plugin/Plugin";
import Major from "../Major/Major";
import Builder from "../Builder/Builder";
import Services from "../Services/Services";
import Features from "../Features/Features";
import Offers from "../Offers/Offers";
import Latest from "../Latest/Latest";

const Home = () => {
  return (
    <div className="mt-8">
      <Banner></Banner>
      <Demons></Demons>
      <Featured></Featured>
      <InnerPage></InnerPage>
      <Plugin></Plugin>
      <Major></Major>
      <Builder></Builder>
      <Offers></Offers>
      <Services></Services>
          <Features></Features>
          <Latest></Latest>
    </div>
  );
};

export default Home;
