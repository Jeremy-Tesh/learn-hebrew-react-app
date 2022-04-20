import React from "react";
import Card from "../components/Card";
import Description from "../components/Description";

function Details() {
  return (
    <div className="w-screen h-screen flex flex-col items-center mt-10">
      <div className="w-[1000px]">
        <Card />
        <Description />
        <Description />
        <Description />
      </div>
    </div>
  );
}

export default Details;
