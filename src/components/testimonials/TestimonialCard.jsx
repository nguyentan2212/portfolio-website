import React from "react";

function TestimonialCard(props) {
  const { content, name, title, imageUrl } = props;
  return (
    <div className="border-[3px] pt-5 px-3 rounded-md border-primary h-fit">
      <p className="text-xl font-medium">{content}</p>
      <div className="flex flex-row items-center gap-5 my-8">
        <img className="rounded-full" src={imageUrl} alt={name} width={70}/>
        <div>
          <p className="text-2xl font-bold">{name}</p>
          <p>P{title}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
