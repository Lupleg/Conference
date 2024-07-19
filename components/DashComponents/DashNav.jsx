import React from 'react'
import { FaSearch } from "react-icons/fa";
import { MdLogin } from "react-icons/md";

function DashNav() {
  return (
    <div className='h-20 flex space-x-8 justify-between items-center px-8 border-b fixed top-0 w-full z-40 bg-white'>
      <div className="flex space-x-4">
        <img
          src="/profile-sample.jpeg"
          alt="avatar"
          className="h-12 w-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-bold">Code with Us</h3>
          <p className="text-sm">
            <span className="text-gray-400">Challenge yourself!</span>
          </p>
        </div>
      </div>
      <div className='border flex rounded-lg px-0 h-10 pl-4'>
        <input type="text" placeholder='search for a challenge' className='w-[500px] border-none outline-none' />
        <button className='bg-green-950 p-2 px-1 rounded-r-lg w-10 flex justify-center items-center hover:bg-green-900 h-full'><FaSearch className='text-[#ffffff]'/></button>
      </div>
      <div>
        <button className='flex space-x-2 border rounded-lg p-2 justify-between tex-lg items-center hover:bg-slate-200'><MdLogin /> <span>Login</span></button>
      </div>
    </div>
  )
}

export default DashNav