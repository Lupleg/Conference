
import { MdBrandingWatermark } from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";
import { LuFilePlus2 } from "react-icons/lu";

function Card() {
  return (
    <div className="shadow-lg sm:flex sm:flex-col bg-white rounded-3xl overflow-hidden sm:w-70 border border-gray-200  mx-auto  ">
      <div>
        <div className=" mt-[-2] flex-box h-60 -mx-4 rounded-t-3xl relative  ">
          <img src="/studyy.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-2 text-purple-600 flex  text-2xl my-1 font-bold">
        <LuFilePlus2 className="mr-2" />
        <h2>FRONT-END</h2>
      </div>
      <p className="px-2 w-full text-lg-2xl mb-2  font-bold text-gray-800 break-words ">
        Beginner's Guide to Becoming a Professional <br />
        Front-end Developer
      </p>

      <div className="flex justify-start mb-4 px-4">
        <hr className="w-full border-none h-1 bg-green-600" />
      </div>

      <div className="flex items-center  ">
        <img src="/avator.jpg" alt="" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-sm font-bold">Joshua Samsul</p>
          <p className="text-xs text-gray-600">Mentor</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
