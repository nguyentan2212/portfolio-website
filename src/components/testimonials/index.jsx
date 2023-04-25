import React from "react";
import { Icon } from "@iconify/react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias optio nemo dolore nobis architecto voluptatem. Esse facilis perferendis dolorum. Ut numquam doloremque debitis sunt magni vitae, consequuntur quis quam praesentium officiis perferendis quidem iste distinctio voluptate quos dolores itaque ipsum.",
    name: "Roi Hirshberg",
    title: "Owner, Sharpstudio",
    imageUrl: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias debitis incidunt accusamus molestiae tenetur perferendis",
    name: "Roi Hirshberg",
    title: "Owner, Sharpstudio",
    imageUrl: "https://randomuser.me/api/portraits/men/82.jpg",
  },
  {
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque placeat facilis veniam rem. Necessitatibus, aliquam ipsam a explicabo aperiam maxime blanditiis reprehenderit.",
    name: "Rocky Tac-an",
    title: "Designer, Blue Rocket",
    imageUrl: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

function Testimonials() {
  return (
    <div className="px-[88px]">
      <div className="flex flex-row items-center justify-between">
        <div>
          <h1 className="mb-2 text-5xl font-bold uppercase grow">testimonials</h1>
          <p className="text-3xl font-normal capitalize">
            what our clients say
          </p>
        </div>
        <div className="flex flex-row items-center">
          <a className="btn p-3 ml-4 border-2 text-[#c1c1c2] border-[#c1c1c2] hover:scale-100">
            <Icon icon="la:long-arrow-alt-left" width="40" />
          </a>
          <a className="p-3 ml-4 border-2 border-black rounded-full btn">
            <Icon icon="la:long-arrow-alt-right" width="40" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            title={testimonial.title}
            content={testimonial.content}
            name={testimonial.name}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
