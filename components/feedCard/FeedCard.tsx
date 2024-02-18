import Image from "next/image";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaHeart, FaRetweet } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

const FeedCard = () => {
  return (
    <div className="feed-card-container border-t-[1px] border-[#444] px-2 py-2
     hover:bg-[#111] duration-300">
      <div className="grid grid-cols-12">
        <div className="feed-card-item col-span-1 px-1">
          <Image
            src={
              "https://avatars.githubusercontent.com/u/136106202?s=400&u=cb9f078995406b3acc17f4d37ccef26293f4d522&v=4"
            }
            height={40}
            width={40}
            alt="profile Logo"
            className="rounded-full"
          />
        </div>
        <div className="feed-card-item col-span-11 px-2">
          <h1 className="text-[14px]">Bhanu Singh</h1>
          <p>
            The code you provided appears to be typo-free and should work
            correctly if you have addressed the configuration issue in
            next.config.js I mentioned earlier. However, here are some minor
            suggestions for improvement:
          </p>
          <div className="flex justify-between mt-4 px-4 pr-10 py-2">
                <div>
                <BiMessageRounded />
                </div>
                <div>
                <FaRetweet />
                </div>
                <div>
                <FaHeart />
                </div>
                <div>
                <LuUpload />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
