import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
// import FirstNavbar from '../Navbar/FirstNavbar/FirstNavbar';

const MainLayout = () => {
    return (
        <div>
            {/* <FirstNavbar></FirstNavbar> */}
            <Navbar></Navbar>
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;