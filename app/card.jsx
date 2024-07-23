import Image from "next/image";
import computer from "../public/computer.jpg";
import avator from "../public/avator.jpg";
import study from "../public/study.jpg";
import studyy from "../public/studyy.jpg";
import { CgLoadbar } from "react-icons/cg";
import { MdBrandingWatermark } from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";
import { LuFilePlus2 } from "react-icons/lu";

function Card() {
  return (
    <div className="flex flex-wrap md:shrink-0">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 border border-gray-200 rounded-3xl w-3/4 h-[400px hover:scale-110 hover:shadow-md transition-transform duration-300 ease-out">
          <div className="h-60 -mx-4 -mt-4 relative">
            <Image
              src={computer}
              alt="computer"
              layout="fill"
              objectFit="cover"
              className="rounded-t-3xl"
            />
          </div>
          <h2 className="text-blue-400 mt-4 text-2xl flex items-center mx-4">
            <LuFilePlus2 />
            &nbsp; FRONT-END
          </h2>
          <p className="w-full text-sm-2xl text-lg mb-2 font-bold">
            Beginner's Guide to Becoming a Professional Developer Expert
          </p>
          <div className="flex justify-start mb-4 ">
            <CgLoadbar
              style={{ transform: "scaleX(20)", transformOrigin: "left" }}
              className="text-purple-600 "
            />
          </div>

          <div className="rounded-3xl flex mt-4">
            <Image
              src={avator}
              alt="computer"
              className="w-12 h-12 rounded-full mr-4"
              width={60}
              height={60}
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs- text-gray-600">Mentor</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 border border-gray-200 rounded-3xl w-3/4 h-[400px) hover:scale-110 hover:shadow-md transition-transform duration-300 ease-out">
          <div className="h-60 -mx-4 -mt-4 relative">
            <Image
              src={study}
              alt="study"
              layout="fill"
              objectFit="cover"
              className="rounded-t-3xl"
            />
          </div>
          <h2 className="text-purple-500 mt-4 text-2xl flex items-center mx-4">
            <GiPencilRuler />
            &nbsp; UI/UX DESIGN
          </h2>
          <p className="w-full text-2xl text-lg mb-2 font-bold">
            Optimising User Experience with the Best UI/UX Design
          </p>
          <div className="flex justify-start mb-4">
            <CgLoadbar
              style={{ transform: "scaleX(20)", transformOrigin: "left" }}
              className="text-purple-600 "
            />
          </div>

          <div className="rounded-3xl flex mt-4">
            <Image
              src={avator}
              alt="computer"
              className="w-12 h-12 rounded-full mr-4"
              width={60}
              height={60}
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs- text-gray-600">Mentor</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 border border-gray-200 rounded-3xl w-3/4 h-full max-w-full hover:scale-110 hover:shadow-md transition-transform duration-300 ease-out">
          <div className="h-60 -mx-4 -mt-4 relative">
            <Image
              src={studyy}
              alt="study"
              layout="fill"
              objectFit="cover"
              className="rounded-t-3xl"
            />
          </div>
          <h2 className="text-pink-400 mt-4 text-2xl flex items-center mx-4">
            <MdBrandingWatermark />
            &nbsp; BRANDING
          </h2>
          <p className="w-full text-2xl text-lg mb-2 font-bold">
            Reviving and Refresh Company Image
          </p>
          <div className="flex mb-4 ml-2rem">
            <CgLoadbar
              style={{ transform: "scaleX(20)", transformOrigin: "left" }}
              className="text-purple-600 "
            />
          </div>

          <div className="rounded-3xl flex mt-4">
            <Image
              src={avator}
              alt="computer"
              className="w-12 h-12 rounded-full mr-4"
              width={60}
              height={60}
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs- text-gray-600">Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
