import React from 'react';
import logo from '../../assets/logo_nub.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link><img src={logo} width='300' height='300' alt="logo" /></Link>
};

export default Logo;