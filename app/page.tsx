import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import SidebarIcons from "@/components/SidebarIcons";
import { sidebarIcons } from "@/context/sidebarIcons";
import FeedCard from "@/components/feedCard/FeedCard";

export default function Home() {
  return (
    <main>

      <div className=" h-screen w-screen max-lg:pl-0 pl-44 overflow-x-hidden">
          <div className="col-span-3 flex justify-start flex-col pt-3 pr-3 fixed max-lg:hidden">
            <div className="text-3xl h-fit rounded-full p-2 duration-200 cursor-pointer">
               <FaXTwitter className="text-[2rem]"/>
            </div>
            <div>
              {
                sidebarIcons.map((icon,index) =>(
                    <SidebarIcons 
                    key={index}
                    title={icon.title}
                    icons={icon.icon}/>
                ))
              }
              <button className=" py-2 px-6 mt-7 flex items-center justify-center
               w-[90%] bg-[#1A8CD8] font-semibold rounded-[25px] text-[1.25rem]">
                Tweet
                </button>
            </div>
          </div>
       <div className="flex">
          <div className="w-[580px] max-lg:w-full max-lg:mx-10 min-h-screen border-r-[1px] border-l-[1px]
           border-[#666] ml-[17rem] max-lg:border-none">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          </div>
          <div className="w-[340px] h-screen max-lg:hidden"></div>
      </div>
      </div> 
    </main>
  );
}
