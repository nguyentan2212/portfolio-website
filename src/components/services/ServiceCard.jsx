import React from "react";
import { Icon } from "@iconify/react";

function ServiceCard(props) {
  const { title, icon, content, link } = props;
  return (
    <div className="shadow bg-secondary py-9 px-7">
      {icon}
      <p className="my-5 text-3xl font-bold text-black">{title}</p>
      <p className="text-xl">{content}</p>
      <a className="flex flex-row items-center gap-3 py-2 border-2 border-black rounded-md px-7 w-fit mt-14 hover:bg-white" href={link}>
        <p>Let's Discuss</p>
        <Icon icon="la:long-arrow-alt-right" width="30" />
      </a>
      
    </div>
  );
}

export default ServiceCard;
