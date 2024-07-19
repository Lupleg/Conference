
import ChallengeCard from "@/components/DashComponents/ChallengeCard";


export default function DashBoard() {
  return (
    <div className="md:p-12 ml-64 mt-10 h-screen mr-0">
      <div className="flex overflow-x-scroll h-16 space-x-4 overflow-y-hidden items-center">
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">All</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">Frontend</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">Backend</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">Fullstack</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">DevOps</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">Design</button>
        <button className=" rounded-md px-2 py-2 border h-8 flex justify-center items-center min-w-[130px] hover:bg-gray-100">Data Science</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">Mobile</button>
        <button className=" rounded-md px-4 py-2 border h-8 flex justify-center items-center hover:bg-gray-100">AI/ML</button>
        <button className=" rounded-md px-2 py-2 border h-8 flex justify-center items-center min-w-[130px] hover:bg-gray-100">Cyber Security</button>
        <button className=" rounded-md px-2 py-2 border h-8 flex justify-center items-center min-w-[170px] hover:bg-gray-100">Game Development</button>
      </div>
      <div className="flex justify-end flex-wrap space-x-4 ">
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
}
