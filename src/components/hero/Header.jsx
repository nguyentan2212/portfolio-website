import React from "react";
import logo from "@/assets/logo1.png";

function Header() {
  return (
    <div className="flex flex-row justify-between mb-5">
      <img src={logo} alt="logo" width={55} height={55} />
      <ul className="flex flex-row items-center gap-12 text-xl font-medium">
        <li className="font-semibold">
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
      <button className="px-10 text-lg font-semibold text-white rounded-md bg-primary hover:bg-[#326c74]">
        Contact Us
      </button>
    </div>
  );
}

export default Header;
