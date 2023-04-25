import React from "react";
import about from "@/assets/about-me.png";

function AboutMe() {
  return (
    <div className="px-[88px] bg-secondary grid grid-cols-2 gap-16 py-16">
      <div className="max-h-[560px] flex flex-row justify-center">
        <img className="h-full rounded-lg" src={about} alt="avatar" />
      </div>
      <div className="flex flex-col justify-between text-black">
        <h1 className="text-5xl font-extrabold">ABOUT ME</h1>
        <div className="text-2xl">
          <p>
            A proud passionate WordPress & Webflow designer. I help inspired
            entrepreneurs and micro businesses build successful websites for
            their business.
          </p>
          <br />
          <p>
            This place was built to help WordPress and Webflow users, from
            rookies to masterminds, on everything related to it; all based on
            what I've learned through years of crafting and designing websites.
            Here, you'll discover all my web/WP tutorials, resources, tips or
            tricks, and also a little more about me, from a closer view.
          </p>
        </div>
        <button className="py-6 text-2xl font-semibold text-black bg-transparent border-2 border-black rounded-lg px-14 hover:bg-white">
          Let's discuss your projects
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
