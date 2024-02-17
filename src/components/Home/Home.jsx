import React from 'react';
import Banner from '../Banner/Banner';
import Demons from '../Demons/Demons';
import Featured from '../Featured/Featured';
import InnerPage from '../InnerPage/InnerPage';
import Plugin from '../Plugin/Plugin';
import Major from '../Competible/Major';

const Home = () => {
    return (
        <div className='mt-8'>
         <Banner></Banner>
            <Demons></Demons>
            <Featured></Featured>
            <InnerPage></InnerPage>
            <Plugin></Plugin>
            <Major></Major>
        </div>
    );
};

export default Home;