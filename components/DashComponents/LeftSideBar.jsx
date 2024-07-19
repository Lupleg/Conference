import React from "react";
import { BsBrowserSafari } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { MdLeaderboard } from "react-icons/md";
import { RiNewsLine } from "react-icons/ri";
import { Separator } from "@/components/ui/separator";
import { CiMenuKebab } from "react-icons/ci";

function LeftSideBar() {
  return (
    <div className="w-72 flex flex-col justify-start items-center px-3 fixed space-y-2 h-[486px] overflow-scroll pt-2 left-0 top-20 z-40">
      <button className="rounded-lg bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
        <BsBrowserSafari className="h-6 w-6" /> <span>Browse</span>
      </button>
      <button className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
        <GrWorkshop className="h-6 w-6" /> <span>Workshops</span>
      </button>
      <button className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2 ">
        <MdLeaderboard className="h-6 w-6" /> <span>Leaderboard</span>
      </button>
      <button className="rounded-lg hover:bg-gray-100 w-full flex px-2 h-12 justify-start items-center space-x-2">
        <RiNewsLine className="h-6 w-6" /> <span>NewsLetter</span>
      </button>
      <div className="border p-3 rounded-lg mt-4 mb-8">
        <h2 className="text-lg font-bold py-2">Upgrade to pro</h2>
        <p className="pb-2 text-sm">
          Unlock all courses, get access to source code, and more.
        </p>
        <button className="bg-green-950 text-white w-full rounded-lg py-2 hover:bg-green-900">
          Upgrade
        </button>
      </div>
      <Separator className="my-4 " />
      <div className="flex space-x-4 text-xs justify-between items-center w-full h-14">
        <span>&#169; 2024 Lupleg Dev </span>
        <button className="hover:bg-gray-100 p-2 rounded-md"><CiMenuKebab className="h-6 w-6" /></button>
      </div>
    </div>
  );
}

export default LeftSideBar;
