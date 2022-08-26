import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const VISITOR_API = "http://localhost:3002/visitor";
function VisitorList() {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getVisitorList();
  }, []);
  const getVisitorList = async () => {
    const result = await axios.get(VISITOR_API);
    setVisitors(result.data.data);
    console.log(visitors);
    setLoading(false);
    console.log(loading);
  };
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <div className="p-2 m-2 bg-red-400 rounded-full w-36 text-center hover:bg-red-500 cursor-pointer text-slate-100 shadow-md">
        <Link to="/" className="">
          Back To Home
        </Link>
      </div>
      <div className="flex flex-col gap-2 p-1 m-2 mt-10">
        <table className="border-collapse w-full flex-col">
          <thead className="border-2 ">
            <th className="border-2 p-4 text-xl bg-red-400 text-slate-100">Name</th>
            <th className="border-2 p-4 text-xl bg-red-400 text-slate-100">Address</th>
            <th className="border-2 p-4 text-xl bg-red-400 text-slate-100">Phone Number</th>
            <th className="border-2 p-4 text-xl bg-red-400 text-slate-100">NIK</th>
          </thead>

          <tbody className="border-2">
            {!loading &&
              visitors.map((e) => {
                return (
                  <tr>
                    <td className="border-2 pl-4 px-1 border-white bg-red-100 ">{e.fullName}</td>
                    <td className="border-2 pl-4 px-1 border-white p-1 bg-red-100">{e.address}</td>
                    <td className="border-2 pl-4 px-1 border-white p-1 bg-red-100">{e.phoneNumber}</td>
                    <td className="border-2 pl-4 px-1 border-white p-1 bg-red-100">{e.NIK}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VisitorList;
