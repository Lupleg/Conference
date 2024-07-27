import React from "react";

import Card from "@/components/ui/card";

function Home() {
  return (
    <div className=" flex flex-wrap px-4 sm:px-6 py-8 sm:py-12 lg:py-20 w-full">
      <h2> Welcome to UI Course</h2>
      <div className="flex flex-wrap w-full bg-white gap-4 justify-around">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
