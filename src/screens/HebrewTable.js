import React from "react";
import Card from "../components/Card";

import Table from "../components/Table";

function Home() {
  return (
    <div className="w-screen overflow-scroll h-screen ">
      <div className="flex">
        <Table />
      </div>
    </div>
  );
}

export default Home;
