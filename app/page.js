import RightSideBar from "@/components/DashComponents/RightSideBar";
import ChallengesTable from "../components/DashComponents/ChallengesTable";

export default function Home() {
  return (
    <div className="px-2 md:p-12">
      <div className="flex justify-between space-x-6">
        <div className="flex-grow">
          <ChallengesTable />
        </div>
        <div className="flex-shrink-0 basis-1/4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
