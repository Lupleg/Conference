
import { MdBrandingWatermark } from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";
import { LuFilePlus2 } from "react-icons/lu";

function Card() {
  return (
    <div className="container p-2 mx-auto  flex flex-col sm:flex-row items-center justify-center min-h-screen p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="bg-white shadow-lg p-4 border border-gray-200 rounded-3xl max-w-xs h-full hover:shadow-lg hover:scale-110 transition duration-300 ease-out overflow-hidden">
          <div className="h-60 -mx-4 -mt-4 relative">
            <img
              src="/study.jpg"
              alt=""
              className="w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-blue-600 mt-2 text-2xl flex justify-content">
            <LuFilePlus2 className="mr-2" /> FRONT-END
          </h2>
          <p className=" w-full text-sm-2xl text-lg mb-2 font-bold">
            Beginner's Guide to Becoming a Professional Developer
          </p>
          <div className="flex justify-start mb-4">
            <hr className="w-full border-none h-1 bg-green-600" />
          </div>

          <div className="flex items-center mt-4">
            <img
              src="/avator.jpg"
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs text-gray-600">Mentor</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 border border-gray-200 rounded-3xl max-w-xs h-full hover:shadow-lg hover:scale-110 transition duration-300 ease-out overflow-hidden">
          <div className="h-60 -mx-4 -mt-4 relative">
            <img
              src="/studyy.jpg"
              alt=""
              className="w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-purple-600 mt-2 text-2xl flex items-center">
            <GiPencilRuler className="mr-2" /> UI/UX DESIGN
          </h2>
          <p className=" w-full text-sm-2xl text-lg mb-2 font-bold">
            Optimising User Experience with the Best UI/UX Design
          </p>
          <div className="flex justify-start mb-4">
            <hr className="w-full border-none h-1 bg-blue-600" />
          </div>

          <div className="flex items-center mt-4">
            <img
              src="/avator.jpg"
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs text-gray-600">Mentor</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg p-4 border border-gray-200 rounded-3xl max-w-xs h-full hover:shadow-lg hover:scale-110 transition duration-300 ease-out overflow-hidden">
          <div className="h-60 -mx-4 -mt-4 relative">
            <img
              src="/computer.jpg"
              alt=""
              className="w-full h-48 object-cover"
            />
          </div>
          <h2 className="text-green-500 mt-2 text-2xl flex items-center">
            <MdBrandingWatermark className="mr-2" /> BRANDING
          </h2>
          <p className="  w-full text-sm-2xl text-lg mb-2 font-bold">
            Reviving and Refresh Company Image
          </p>
          <div className="flex justify-start mb-4 ml-auto">
            <hr className="w-full border-none h-1 bg-purple-600" />
          </div>

          <div className="flex items-center mt-4">
            <img
              src="/avator.jpg"
              alt=""
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-bold">Joshua Samsul</p>
              <p className="text-xs text-gray600">Mentor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
