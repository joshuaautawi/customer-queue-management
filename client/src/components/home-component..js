import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className=" text-4xl w-full h-screen flex justify-center flex-col items-center">
      <ul className="p-8 flex flex-col gap-10 text-slate-700  ">
        <li className="bg-red-400 text-slate-100 p-4 text-center rounded-xl">
          <Link to="/queue">Print Barcode</Link>
        </li>
        <li className="bg-red-400 text-slate-100 px-14 p-5 text-center rounded-xl mt-5">
          <Link to="/addvisitor">Input Visitor Details</Link>
        </li>

        <li className="bg-red-400  text-slate-100 px-14  p-5 text-center rounded-xl mt-5">
          <Link to="/visitor">Visitor List</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
