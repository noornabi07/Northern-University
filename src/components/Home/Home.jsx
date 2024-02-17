import React from 'react';
import Banner from '../Banner/Banner';
import Demons from '../Demons/Demons';
import Featured from '../Featured/Featured';
import InnerPage from '../InnerPage/InnerPage';

const Home = () => {
    return (
        <div className='mt-8'>
         <Banner></Banner>
            <Demons></Demons>
            <Featured></Featured>
            <InnerPage></InnerPage>
        </div>
    );
};

export default Home;