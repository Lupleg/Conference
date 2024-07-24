import React from "react";
import Card from "./Card";



function Home() {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-20 ">
      <h2> Welcome to UI Course</h2>

      <Card />
    </div>
  );
}

export default Home;
