import React from "react";
function Card() {
  return (
    <div>
      <div className=" backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> p-4 border border-gray-200 rounded-3xl w-68 w-1/2 h-60 "></div>
      <p className="mt-2 bg-gray-200 rounded p-2   w-20 block mt-3">
        <span className="mr-3">FRONT</span>
        <span className="mr-3">END</span>
      </p>
      <p className="text-2xl w-68 w-1/2 overflow-wrap mt-8">
        Beginner's Guide to Becoming a Professional Front-End Developer
      </p>
      <div className="flex mt-4">
        <img
          src="../public/istockphoto-1389898237-1024x1024.jpg"
          alt="Profile Picture"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="text-sm font-bold">Joshua Samsul</p>
          <p className="text-xs text-gray-600">Mentor</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
