"use client";

import Link from "next/link";

function Mydascompo() {
  return (
    <div className=" container grid bg-yellow-800 rounded-xl text-xl   mx-4 my-10 h-3/5 w-5/5">
      <div className=" flex flex-row gap-16 h-12 my-8 mx-8 items-center rounded-xl bg-white   text-md  ">
        <a href="#" className="ml-4">
          Lupleg
        </a>
        <div className=" flex flex-row items-end gap-8 ml-56 ">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Use cases</Link>
          <Link href="#">Faq</Link>
        </div>
      </div>

      <div className="flex pt-10 mx-6 gap-16 text-white flex-row">
        <div>
          <p className="border-gray-400 mb-4 text-white border-2 pl-4 w-56 h-8 rounded-xl">
            New version 3.0 is out!
          </p>
          <h1 className="text-4xl">AI-Powered</h1>
          <div></div>
          <h1 className="text-4xl">Financial smart solution*</h1>
        </div>

        <div className="flex flex-col ml-72 text-white text-lg">
          <p className="text-lg">
            Our AI system offers human like conversation, infinite memory, and
            autonomous operations, setting a new standard in customer
            interaction
          </p>
          <div className="flex flex-col mt-4">
            <p>Based on data</p>
            <p>100% secure</p>
          </div>
          <button className="text-xl bg-black my-4 hover:bg-white hover:text-black   text-white rounded-full w-64 h-16">
            Get started
          </button>
        </div>
      </div>

      <div
        className=" my-8 ml-32 w-4/5 h-72 border-4 border-gray-500  "
        style={{
          backgroundImage:
            'url( "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MJDy4uvWkHqA-COYWv3eRgQRvPcK2FR34w&s")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex border-"></div>
      </div>
    </div>
  );
}
export default Mydascompo;
