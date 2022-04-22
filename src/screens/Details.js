import React from "react";
import Card from "../components/Card";
import Description from "../components/Description";

function Details() {
  return (
    <div className="w-screen  h-screen overflow-scroll pt-11 ">
      <div className="w-screen mr-5 grid place-items-center ">
        <div className="w-[1200px] ml-2">
          <Card />
          <Description />
        </div>
      </div>
    </div>
  );
}

export default Details;
