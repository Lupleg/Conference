import RightSideBar from "@/components/DashComponents/RightSideBar";
import ChallengesTable from "../../components/DashComponents/ChallengesTable";
import ChallengesCarousel from "@/components/DashComponents/ChallengesCarousel";

export default function Home() {
  return (
    <div className="px-2 md:p-12 bg-[hsl(0 0% 100%)]">
      <div className="flex justify-between space-x-6">
        <div className="flex-grow">
          <div>
          </div>
          <ChallengesCarousel />
          <ChallengesTable />
        </div>
        <div className="flex-shrink-0 basis-2/6">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}
