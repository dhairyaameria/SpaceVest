import React from "react";
import Sidebar from "components/Navbars/Sidebar.js";
// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables() {
  return (
    <>
    
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <Sidebar />
        <div className="w-8/12 mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
