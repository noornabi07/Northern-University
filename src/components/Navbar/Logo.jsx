import React from "react";
import logo from "../../assets/major/hello.jpg";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
          <img src={logo} width="50" className="rounded-full" height='50' alt="" />
          <h1 className="text-3xl font-bold text-white">Northern University Of Bangladesh</h1>
    </div>
  );
};

export default Logo;
