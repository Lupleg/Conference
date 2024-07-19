import RightSideBar from "@/components/DashComponents/RightSideBar";
import ChallengesTable from "../components/DashComponents/ChallengesTable";
import ChallengeCard from "@/components/DashComponents/ChallengeCard";


export default function Home() {
  return (
    <div className="md:p-12 ml-64 mt-16 h-screen mr-0">
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
