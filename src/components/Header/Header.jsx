import React from "react";
import header1 from '../../assets/header/header1.jpg'
import header2 from '../../assets/header/header2.jpg'
import header3 from '../../assets/header/header3.jpg'
import header4 from '../../assets/header/header4.jpg'
import header5 from '../../assets/header/header5.jpg'
import header6 from '../../assets/header/header6.jpg'
import header7 from '../../assets/header/header7.jpg'
import header8 from '../../assets/header/header8.jpg'
import header9 from '../../assets/header/header9.jpg'
import header10 from '../../assets/header/header10.jpg'
import header11 from '../../assets/header/header11.jpg'
import header12 from '../../assets/header/header12.jpg'
import header13 from '../../assets/header/header13.jpg'
import header14 from '../../assets/header/header14.jpg'
import header15 from '../../assets/header/header15.jpg'
import header16 from '../../assets/header/header16.jpg'
import header17 from '../../assets/header/header17.jpg'
import header18 from '../../assets/header/header18.jpg'
import header19 from '../../assets/header/header19.jpg'

const Header = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">19 Header Styles</h1>
          <p className="my-8 font-serif font-semibold">
            You can also choose to enable top bar for each header style as well.
          </p>
          

          {/* header image */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <img src={header1} alt="" />
              <img src={header2} alt="" />
              <img src={header3} alt="" />
              <img src={header4} alt="" />
              <img src={header5} alt="" />
              <img src={header6} alt="" />
              <img src={header7} alt="" />
              <img src={header8} alt="" />
              <img src={header9} alt="" />
              <img src={header10} alt="" />
              <img src={header11} alt="" />
              <img src={header12} alt="" />
              <img src={header13} alt="" />
              <img src={header14} alt="" />
              <img src={header15} alt="" />
              <img src={header16} alt="" />
              <img src={header17} alt="" />
              <img src={header18} alt="" />
              <img src={header19} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
