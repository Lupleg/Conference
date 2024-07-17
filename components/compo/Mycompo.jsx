"use client";

import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { LuPencilRuler } from "react-icons/lu";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbFolderOpen } from "react-icons/tb";

function home() {
  return (
    <section classname="flex items-center w-full bg-blue-300 justify-center h-screen">
      <div className="container border-none rounded-lg max-w-3xl mt-20  h-full bg-violet-600">
        <h2 className="ml-2 pt-3 text-white text-md">Online courses</h2>
        <p className="ml-2 text-relaxed pt-3 text-white text-3xl">
          Sharpen your skills with Professional online courses
        </p>

        <button className="ml-2 mt-4 text-md rounded-full bg-black mb-4 w-42 pl-4 hover:bg-white hover:text-black  h-10 text-white">
          <div className="flex  items-center w-full">
            join now
            <div className="border-none w-10">
              <IoIosArrowForward />
            </div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8  max-w-3xl mt-8 w-full px-12">
        <div className="border-box ml-2 bg-gray-200 p-2 rounded-2xl flex flex-col-4 items-center">
          <div className="flex  items-center w-full">
            <div className="border-none w-32 h-12 rounded-full bg-white">
              <LuPencilRuler className="items-center flex w-12 h-8 pt-2" />
            </div>
            <p className="mx-2">2/8 watched</p>
            <h1 className="mt-1">UI/UX Design</h1>

            <PiDotsThreeVerticalBold className="items-center ml-2 flex w-12 h-8 pt-2" />
          </div>
        </div>
        <div className="border-box border-2">
          <HiOutlineSquare2Stack />
          <p>3/8 </p>
          <h1>Branding</h1>
          <PiDotsThreeVerticalBold />
        </div>
        <div className="border-box border-2 bg-white">
          <TbFolderOpen />
          <p>6/12 watched</p>
          <h1>Font-End</h1>
          <PiDotsThreeVerticalBold />
        </div>
      </div>
    </section>
  );
}
export default home;
