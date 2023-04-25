import React from "react";
import { Icon } from "@iconify/react";

function BlogCard(props) {
  const { title, date, image, url } = props;

  const style = {
    backgroundImage: `linear-gradient(to top, rgba(30, 64, 68, 1), 60%, rgb(30, 64, 68, 0.3)), url(${image})`,
  };
  return (
    <div
      style={style}
      className="bg-cover flex flex-col justify-end h-[450px] rounded-lg shadow-md text-white px-5 py-6"
    >
      <div>
        <p className="mb-3">Posted - {date}</p>
        <a className="float-right p-3 ml-4 text-black btn">
          <Icon icon="la:long-arrow-alt-right" width="40" />
        </a>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default BlogCard;
