import React from 'react';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';
import Container from '../Container/Container';

const Navbar = () => {
    return (
        <div className='bg-blue-600 w-full fixed z-10 shadow-sm'>
            <div className='py-6 border-b-[1px]'>
                <Container>
                    <div className='flex justify-between items-center gap-3 md:gap-3 flex-row'>
                        <Logo></Logo>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;