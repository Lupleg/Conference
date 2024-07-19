"use client";

import React from "react";

import { IoIosArrowForward } from "react-icons/io";
import { LuPencilRuler } from "react-icons/lu";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { HiOutlineSquare2Stack } from "react-icons/hi2";
import { TbFolderOpen } from "react-icons/tb";

function home() {
  return (
    <>
      <section className="bg-blue-100 flex flex-col py-8">
        <div className="container   border-none rounded-lg max-w-full md:max-w-2xl lg:max-w-3xl px-4  sm:px-10  md:px-16 lg:px-16 mt-32  h-full bg-violet-600">
          <h2 className="ml-2 pt-3 text-white text-md">Online courses</h2>
          <p className="ml-2 text-relaxed pt-3 text-white text-3xl">
            Sharpen your skills with Professional online courses
          </p>

          <div className="flex flex-col">
            <button className="ml-2 mt-4 text-lg rounded-full hover:bg-white bg-black  mb-4 w-36 pl-4 h-10 text-white">
              <div className="flex  items-center w-full">
                join now
                <div className="border-none ml-2 bg-black rounded-full  w-10 h-10">
                  <IoIosArrowForward className="w-10 h-10" />
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex-row-3 w-auto h-full   gap-8 mt-8 ">
          <div className="flex flex-row-3  bg-white py-4 px-4 h-17 w-92 rounded-3xl gap-2 justify-center items-center">
            <div className="border bg-violet-200 items-center px-2 py-2   w-12 h-12 rounded-full">
              <LuPencilRuler className=" w-6 h-6 items-center" />
            </div>
            <div>
              <p>2/8 watched</p>
              <h1>UI/UX Design</h1>
            </div>
            <PiDotsThreeVerticalBold className=" rounded-full w-8 h-8 items-center" />
          </div>

          <div className="flex flex-row-3  bg-white py-4 px-4 h-17 w-92 rounded-3xl gap-2 justify-center items-center">
            <div className="border bg-pink-200 items-center px-2 py-2   w-12 h-12 rounded-full">
              <HiOutlineSquare2Stack className=" w-6 h-6 items-center" />
            </div>
            <div>
              <p>2/8 watched</p>
              <h1>UI/UX Design</h1>
            </div>
            <PiDotsThreeVerticalBold className=" rounded-full w-8 h-8 items-center" />
          </div>

          <div className="flex flex-row-3  bg-white py-4 px-4 h-17 w-92 rounded-3xl gap-2 justify-center items-center">
            <div className="border bg-blue-100 items-center px-2 py-2   w-12 h-12 rounded-full">
              <TbFolderOpen className=" w-6 h-6 items-center" />
            </div>
            <div>
              <p>2/8 watched</p>
              <h1>UI/UX Design</h1>
            </div>
            <PiDotsThreeVerticalBold className=" rounded-full w-8 h-8 items-center" />
          </div>
        </div>
      </section>
    </>
  );
}
export default home;
