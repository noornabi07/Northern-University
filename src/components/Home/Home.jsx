import React from 'react';
import Banner from '../Banner/Banner';
import Demons from '../Demons/Demons';
import Featured from '../Featured/Featured';
import InnerPage from '../InnerPage/InnerPage';
import Plugin from '../Plugin/Plugin';
import Major from '../Major/Major';
import Builder from '../Builder/Builder';
import Services from '../Services/Services';
import Header from '../Header/Header';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div className='mt-8'>
         <Banner></Banner>
            <Demons></Demons>
            <Featured></Featured>
            <InnerPage></InnerPage>
            <Plugin></Plugin>
            <Major></Major>
            <Builder></Builder>
            <Services></Services>
            <Header></Header>
            <Features></Features>
        </div>
    );
};

export default Home;