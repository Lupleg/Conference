import React from "react";

import Card from "@/components/ui/card";

function Home() {
  return (
    <div className=" flex flex-wrap px-4 sm:px-6 py-8 sm:py-12 lg:py-20 w-full">
      <h2> Welcome to UI Course</h2>
      <div className="px-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full bg-white">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
