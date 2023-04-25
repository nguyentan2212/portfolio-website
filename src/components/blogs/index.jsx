import React from "react";
import { Icon } from "@iconify/react";
import BlogCard from "./BlogCard";

const blogs = [
  {
    date: "June 15, 2022",
    title: "How I Found Myself Accused Of Stealing Code From WordPress",
    image: "https://picsum.photos/id/12/300/400",
    url: "#",
  },
  {
    date: "June 15, 2022",
    title: "How I Found Myself Accused Of Stealing Code From WordPress",
    image: "https://picsum.photos/id/36/300/400",
    url: "#",
  },
  {
    date: "June 15, 2022",
    title: "How I Found Myself Accused Of Stealing Code From WordPress",
    image: "https://picsum.photos/id/20/300/400",
    url: "#",
  },
];

function Blogs() {
  return (
    <div className="px-[88px]">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-5xl font-extrabold uppercase grow">
          tutorials and <br/> recommendation
        </h1>
        <div className="flex flex-row items-center">
          <p className="text-lg font-semibold capitalize">see all blogs</p>
          <a className="p-3 ml-4 border-2 border-black btn">
            <Icon icon="la:long-arrow-alt-right" width="40" />
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-16">
        {blogs.map((blog, idx) => (
          <BlogCard
            key={idx}
            title={blog.title}
            image={blog.image}
            url={blog.url}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
