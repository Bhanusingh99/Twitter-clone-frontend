import React from 'react';

interface iconsProps {
  title: string;
  icons: React.ReactNode;
  additionalCss?:String
}

const SidebarIcons = ({ title, icons,additionalCss }: iconsProps) => {
  return (
    <div className={`flex items-center gap-3 cursor-pointer mb-1.75 duration-250
     py-2 px-2 rounded-[28px] w-fit pr-5 ${additionalCss} hover:bg-[#222]`}>
      <div className='text-[1.8rem]'>{icons}</div>
      <p className='font-semibold'>{title}</p>
    </div>
  );
};

export default SidebarIcons;
