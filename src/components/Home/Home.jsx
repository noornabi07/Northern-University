import React from 'react';
import Banner from '../Banner/Banner';
import Demons from '../Demons/Demons';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className='mt-8'>
         <Banner></Banner>
            <Demons></Demons>
            <Featured></Featured>
        </div>
    );
};

export default Home;