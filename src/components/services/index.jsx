import React from "react";
import ServiceCard from "./ServiceCard";
import { Icon } from "@iconify/react";

const services = [
  {
    icon: <Icon icon="ic:baseline-wordpress" color="#36709a" height="45"/>,
    title: "WordPress",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus tempore adipisci ipsam libero consectetur odio vitae non enim quo.",
    link: "#",
  },
  {
    icon: <Icon icon="simple-icons:webflow" color="#4651f5" height="45"/>,
    title: "Webflow",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus tempore adipisci ipsam libero consectetur odio vitae non enim quo.",
    link: "#",
  },
  {
    icon: <Icon icon="gg:website" height="45"/>,
    title: "Site Maintenance",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui temporibus tempore adipisci ipsam libero consectetur odio vitae non enim quo.",
    link: "#",
  },
];
function Services() {
  return (
    <div className="px-[88px]">
      <h2 className="text-3xl font-medium uppercase">what we do</h2>
      <h1 className="text-5xl font-extrabold uppercase">our services</h1>
      <div className="grid grid-cols-3 gap-8 mt-16">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            icon={service.icon}
            content={service.content}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
