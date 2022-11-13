import React from "react";
import { useParams } from "react-router-dom";
import Box from "../components/Box";
import Card from "../components/Card";
import Description from "../components/Description";

function Details() {
  const { index } = useParams();

  return (
    <div className="w-auto  h-auto overflow-scroll pt-11 ">
      <div className="w-auto mr-5 grid m-2 ">
        <div className="w-auto ml-2">
          <div className="flex flex-wrap">
            <Card index={index} show={true} />
            <Box index={index} />
          </div>

          <Description index={index} />
        </div>
      </div>
    </div>
  );
}

export default Details;
