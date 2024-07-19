"use client";
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import Image from "next/image";

function RightSideBar() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="shadow-sm flex flex-col items-center mt-1">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-3xl border w-full flex flex-col items-center space-x-2 bg-white"
      />
      <div className="mt-6">
        <h1 className="text-xl font-bold pb-2">Upcoming Challenges</h1>
        <div className="border p-4 rounded-3xl bg-white">
          <div className="flex gap-2 mt-2 mb-3">
            <span className="px-2 py-1 bg-green-950 text-white rounded-full text-sm">
              Beginner
            </span>
            <span className="px-2 py-1 bg-orange-800 text-white rounded-full text-sm">
              2D-Arrays
            </span>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-3">English Grammar</h2>
            <span className="text-xl font-bold">
              $50.<span className="text-sm">99</span>
            </span>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium eveniet dolorum.
          </p>
          <div className="flex space-x-4 border-b-2 items-center mt-4 pb-3">
            <div className="flex space-x-2 items-center">
              <FaRegClock />
              <span className="font-bold">3 Month</span>
            </div>
            <div className="flex space-x-2 items-center">
              <IoBookOutline />
              <span className="font-bold">56 lessons</span>
            </div>
          </div>
          <div>
          <div className="relative h-16">
              <Image
                src="/profile-sample.jpeg"
                alt="image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 absolute top-5 left-2 border-2 border-white"
                />
                <Image
                src="/profile-sample.jpeg"
                alt="image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 absolute top-5 left-8 border-2 border-white"
                />
                <Image
                src="/profile-sample.jpeg"
                alt="image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 absolute top-5 left-14 border-2 border-white"
                />
                <Image
                src="/profile-sample.jpeg"
                alt="image"
                width={50}
                height={50}
                className="rounded-full h-12 w-12 absolute top-5 left-20 border-2 border-white"
                />
                <div className="absolute top-7 left-44">
                  <button className="bg-green-950 p-1 px-4 rounded-full text-white">View</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
