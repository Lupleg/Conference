import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ChallengeCard() {
  return (
    <Card className="group rounded-xl w-[280px] my-4">
      <div className=" h-[50px] w-full rounded-xl">
        <img
          src="/profile-sample.jpeg"
          alt={`Episode`}
          className="h-32 w-full object-cover rounded-t-xl"
        />
      </div>
      <CardContent className="flex flex-col gap-2 mt-20">
        <h3 className="text-md font-bold line-clamp-2 pt-3">Build a Canva Clone</h3>
        <div className="text-white  bg-green-950 rounded-sm w-28 px-1">52 Chapters</div>
      </CardContent>
    </Card>
  );
}
