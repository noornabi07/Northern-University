import React from 'react';
import userLogo from '../../assets/download.jpg'

const Avatar = () => {
    return (
        <div>
            <img src={userLogo} className='rounded-full w-[28px] h-[28px]' alt="" />
        </div>
    );
};

export default Avatar;