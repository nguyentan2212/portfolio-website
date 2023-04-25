import React from "react";
import { Icon } from "@iconify/react";
import logo from "@/assets/logo2.png";

function Footer() {
  return (
    <footer className="grid grid-cols-5 bg-primary px-[88px]">
      <div className="row-span-3 pt-20 shadow-md">
        <img src={logo} alt="logo" width={55} />
        <ul className="flex flex-col items-start gap-8 pb-6 mt-10 text-2xl font-medium text-white">
          <li>
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
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-span-4 pt-20 pl-5 text-5xl text-white">
        <p>Want To Discuss A Project?</p>
        <a className="float-right p-3 ml-4 text-black bg-white btn">
          <Icon icon="la:long-arrow-alt-right" width="40" />
        </a>
        <p className="py-2 font-bold border-b-4 border-white w-fit">
          Let's Work Together On Your Project.
        </p>
      </div>
      <div className="col-span-4 pl-5 text-5xl text-white">
        <p>Connect With Me On Social Media:</p>
        <div className="flex flex-row items-center justify-start gap-3 mt-3 text-primary">
          <a className="p-3 ml-4 btn">
            <Icon icon="ri:facebook-fill" width="30" />
          </a>
          <a className="p-3 ml-4 btn">
            <Icon icon="ri:twitter-fill" width="30" />
          </a>
          <a className="p-3 ml-4 btn">
            <Icon icon="tabler:brand-instagram" width="30" />
          </a>
          <a className="p-3 ml-4 btn">
            <Icon icon="mdi:youtube" width="30" />
          </a>
          <a className="p-3 ml-4 btn">
            <Icon icon="mdi:linkedin" width="30" />
          </a>
          <a className="p-3 ml-4 btn">
            <Icon icon="mdi:facebook-messenger" width="30" />
          </a>
        </div>
      </div>
      <p className="col-span-3 text-xl text-center text-white place-self-center">
        © 2022 LOGO. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}

export default Footer;
