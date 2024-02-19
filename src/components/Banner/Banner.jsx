import React from 'react';
import Container from '../Container/Container';
import banner1 from '../../assets/banner2.jpg'
import banner2 from '../../assets/banner1.png'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.png'

const Banner = () => {
    return (
        <Container>
            <div className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={banner2} className="w-full h-[700px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={banner1} className="w-full h-[700px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={banner3} className="w-full h-[700px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={banner4} className="w-full h-[700px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-sm btn-success">1</a>
                <a href="#item2" className="btn btn-sm btn-success">2</a>
                <a href="#item3" className="btn btn-sm btn-success">3</a>
                <a href="#item4" className="btn btn-sm btn-success">4</a>
            </div>
        </Container>
    );
};

export default Banner;