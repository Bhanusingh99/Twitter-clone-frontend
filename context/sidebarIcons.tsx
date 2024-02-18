import { BiHomeCircle, BiMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";

interface sideBardIconsInterface {
    title: string;
    icon: React.ReactNode;
  }
  
export const sidebarIcons: sideBardIconsInterface[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />
    },
    {
      title: "Explore",
      icon: <IoIosSearch />,
    },
    {
      title: "Notification",
      icon: <IoNotifications />,
    },
    {
      title: "Messages",
      icon: <BiMessageSquareDetail />,
    },
    {
      title: "Grok",
      icon: <MdHomeFilled />,
    },
    {
      title: "List",
      icon: <MdHomeFilled/>,
    },
    {
      title: "Permimum",
      icon: <FaTwitter />,
    },
    {
      title: "Profile",
      icon: <CgProfile />,
    },
    {
      title: "More",
      icon: <CiCircleMore />,
    },
  ];
  