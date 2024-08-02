"use client";

import Link from "next/link";
import { FaCheck } from "react-icons/fa";

function Mydascompo() {
  return (
    <div className=" grid  bg-gray-100  ">
      <section className=" container grid sm:w-full  rounded-xl text-xl bg-white my-10  ">
        {/* Header Section */}
        <div className="flex flex-row gap-16 h-12 my-8 mx-8 items-center rounded-xl bg-gray-800 text-white">
          <a href="#" className="ml-4 text-green-500">
            Lupleg
          </a>
          <div className="flex flex-row items-end gap-8 mr-4 ml-auto">
            <Link href="#" className="text-gray-300 hover:text-green-500">
              About
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500">
              Features
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500">
              Pricing
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500">
              Use cases
            </Link>
            <Link href="#" className="text-gray-300 hover:text-green-500">
              Faq
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex pt-10 mx-6 gap-16 text-gray-800 flex-row">
          <div className="flex flex-col">
            <p className="border-gray-400 mb-4 text-gray-800 border-2 pl-4 w-56 h-8 rounded-xl bg-white">
              New version 3.0 is out!
            </p>
            <h1 className="text-5xl font-bold">AI-Powered</h1>
            <h1 className="text-5xl font-bold">
              Financial <br /> Smart Solution*
            </h1>
          </div>

          <div className="flex flex-col ml-auto mr-8 text-gray-800 ">
            <p className="text-xl text-relaxed leading-15 font-sans mb-4">
              Our AI system offers human-like conversation,
              <br /> infinite memory, and autonomous operations, setting
              <br /> a new standard in customer interaction.
            </p>
            <div className="flex flex-row gap-8 mt-4">
              <div className="flex flex-row gap-2">
                <FaCheck className="text-green-400 items-center" />
                <p>Based on Data</p>
              </div>
              <div className="flex flex-row gap-2">
                <FaCheck className="text-green-400 items-center" />
                <p>100% Secure</p>
              </div>
            </div>
            <button className="text-xl bg-green-500 my-4 hover:bg-green-600 hover:text-white text-white rounded-full w-64 h-16">
              Get Started
            </button>
          </div>
        </div>

        {/* Background Image Section */}
        <div
          className="relative mb-12 mt-4 ml-32 w-4/5 h-72 border-4 border-none rounded-2xl overflow-hidden"
          style={{
            backgroundImage:
              'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfwqOT4IIjM_BdrsZLlNy51fGbx6mkFE60oQ&s")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 flex justify-end mx-6 my-6 items-right">
            <div className="relative border-4 bg-white border-none  bg-opacity-30 backdrop-blur-sm rounded-2xl p-4">
              <h1 className="text-black text-3xl font-bold">90X Accurate</h1>
              <p className="text-black text-sm mt-2">
                Our AI precision redefines
                <br /> excellence in financial solutions.
              </p>
            </div>
          </div>

          {/* Testimonial Images */}
          <div className="absolute -bottom-4 z-index:50 left-4  flex h-20 bg-white items-center rounded-3xl gap-4  mx-16">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-confident-young-business-woman-260nw-1593222007.jpg"
              alt="Testimonial 1"
              className="w-14 h-14 rounded-full border-2 border-none"
            />
            <img
              src="https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg"
              alt="Testimonial 2"
              className="w-14 h-14   rounded-full border-2 border-none"
            />
            <img
              src="https://cdn.prod.website-files.com/606e3b73301630008098f7f0/614295203f913e42b8ff4520_capsule-video-testimonial-tips-header.jpg"
              alt="Testimonial 3"
              className="w-14 h-14 rounded-full border-2 border-none"
            />
            <p className="mr-2">Used by 2000+ people</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mydascompo;
