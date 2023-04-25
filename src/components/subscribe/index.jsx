import React from "react";
import mail from "@/assets/mail.png";

function Subscribe() {
  return (
    <div className="py-20 px-[88px] bg-secondary grid grid-cols-5">
      <div className="flex flex-col justify-center col-span-3 gap-9 w-fit">
        <h1 className="text-5xl font-extrabold uppercase">
          join the mailing list
        </h1>
        <p className="text-2xl">
          Sign up to receive email updates on new product
          <br /> announcements, gift ideas, special promotions, sales
          <br /> and other stuff.
        </p>
        <form className="flex flex-row gap-5">
          <input className="px-4 py-3 border-2 rounded-md border-primary basis-3/5" type="text" placeholder="Email Address" />
          <button className="px-10 py-3 text-white uppercase rounded-md bg-primary basis-2/5" type="submit">subscribe</button>
        </form>
      </div>
      <img className="col-span-2" src={mail} alt="mail" />
    </div>
  );
}

export default Subscribe;
