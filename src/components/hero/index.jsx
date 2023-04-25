import React from "react";
import Header from "./Header";
import heroImage from "@/assets/work.png";
import amazon from "@/assets/logo/amazon.png";
import microsoft from "@/assets/logo/microsoft.png";
import netflix from "@/assets/logo/amazon.png";
import nvidia from "@/assets/logo/nvidia.png";
import walmart from "@/assets/logo/walmart.png";
import petrochina from "@/assets/logo/petrochina.png"

function Hero() {
  return (
    <div className="px-[88px]">
      <Header />
      <div className="grid grid-cols-2 mb-10">
        <div className="flex flex-col items-start justify-center gap-16">
          <div className="text-6xl font-bold">
            <p>WordPress</p> 
            <p className="border-b-4 border-primary w-fit"><span className="text-primary">Developer</span> &</p>
            <p>Coffee Enthusiast</p>
            </div>
          <button className="py-4 text-xl text-white rounded-md shadow-md px-14 bg-primary hover:bg-[#326c74]">
            Hire Me
          </button>
        </div>
        <div>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
      <div className="grid items-center grid-cols-6 gap-5">
        <img src={microsoft} alt="microsoft" />
        <img src={amazon} alt="amazon"/>
        <img src={nvidia} alt="nvidia"/>
        <img src={walmart} alt="microsoft"/>
        <img src={petrochina} alt="petrochina"/>
        <img src={netflix} alt="microsoft"/>
      </div>
    </div>
  );
}

export default Hero;
