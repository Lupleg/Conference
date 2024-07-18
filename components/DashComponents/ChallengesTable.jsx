import React from 'react'

function ChallengesTable() {
  return (
    <div className='py-12 rounded-lg'>
      <div className='flex justify-between items-center'>
      <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Your Challenges</h1> 
      <div className='flex justify-end mt-4'>
          <button className='bg-green-950 text-white px-4 py-2 rounded-full shadow-sm shadow-green-950 hover:bg-green-900'>View All</button>
        </div>
      </div>
      <div>
      </div>
      <div className=' rounded-3xl mt-8 shadow-sm shadow-green-950'>
        <div className='w-full h-12 flex justify-between items-center border-b-2 md:px-10 px-4'>
          <span className='text-lg font-bold'>Challenge</span>
          <span className='text-lg font-bold hidden md:block'>Start Date</span>
          <span className='text-lg font-bold hidden md:block'>End Date</span>
          <span className='text-lg font-bold hidden md:block'>Progress</span>
          <span className='text-lg font-bold'>Status</span>
        </div>
        <div className='hover:bg-gray-200 h-20 flex justify-between items-center border-b px-10'>
          <span>Challenge 1</span>
          <span className='hidden md:block'>01/01/2021</span>
          <span className='hidden md:block'>01/07/2021</span>
          <span className='hidden md:block'>50%</span>
          <span className='bg-orange-700 p-1 px-4 rounded-full text-white w-24 flex justify-center'>Active</span>
        </div>
        <div className='hover:bg-gray-200 h-20 flex justify-between items-center border-b px-10'>
          <span>Challenge 2</span>
          <span className='hidden md:block'>01/01/2021</span>
          <span className='hidden md:block'>01/07/2021</span>
          <span className='hidden md:block'>100%</span>
          <span className='bg-green-950 p-1 px-4 rounded-full text-white w-28 flex justify-center'>Completed</span>
        </div>
        <div className='hover:bg-gray-200 h-20 flex justify-between items-center border-b px-10 rounded-b-3xl'>
          <span>Challenge 3</span>
          <span className='hidden md:block'>01/01/2021</span>
          <span className='hidden md:block'>01/07/2021</span>
          <span className='hidden md:block'>25%</span>
          <span className='bg-orange-700 p-1 px-4 rounded-full text-white w-24 flex justify-center'>Active</span>
          </div>  
      </div>
    </div>
  )
}

export default ChallengesTable