import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Description from "../components/Description";

function Details() {
  const { index } = useParams();
  console.log(index);

  return (
    <div className="w-screen  h-screen overflow-scroll pt-11 ">
      <div className="w-screen mr-5 grid place-items-center ">
        <div className="w-[1200px] ml-2">
          <Card index={index} show={true} />
          <Description index={index} />
        </div>
      </div>
    </div>
  );
}

export default Details;
