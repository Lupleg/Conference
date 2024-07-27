
import { MdBrandingWatermark } from "react-icons/md";
import { GiPencilRuler } from "react-icons/gi";
import { LuFilePlus2 } from "react-icons/lu";

function Card() {
  return (
    <div className="shadow-lg bg-white rounded-3xl overflow-hidden sm:w-80 md:w-96 lg:w-1/4 border border-gray-200 mx-auto min-w-[400px] hover:shadow-lg hover:scale-110 transition duration-300 ease-out overflow-hidden ">
      <div>
        <div className=" mt-[-2] flexbox h-60 -mx-4 rounded-t-3xl relative  ">
          <img
            src="/studyy.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-3 text-green-600 flex  text-2xl my-1 font-bold">
        <LuFilePlus2 className="mr-2" />
        <h2>FRONT-END</h2>
      </div>
      <p className="px-4 w-full text-lg mb-2  font-bold text-gray-800  line-clamp-2 break-words ">
        Beginner's Guide to Becoming a Professional Front-end Developer
      </p>

      <div className="flex justify-start mb-4 px-5">
        <hr className="w-full border-none h-1 bg-green-600" />
      </div>

      <div className="p-2 flex items-center  ">
        <img src="/avator.jpg" alt="" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-sm text-black-600 font-bold">Joshua Samsul</p>
          <p className="text-xs text-gray-600">Mentor</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
