import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const VISITOR_API = "http://localhost:3002/visitor";
function AddVisitor() {
  console.log("kepanggil", VISITOR_API);
  const [loading, setLoading] = useState(true);
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [NIK, setNIK] = useState("");
  const [address, setAddress] = useState("");
  const [addressTwo, setAddressTwo] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    await addVisitor();
    setfullName("");
    setphoneNumber("");
    setNIK("");
    setAddress("");
    setAddressTwo("");
    navigate("/visitor");
  };
  const addVisitor = async () => {
    await axios.post(VISITOR_API, {
      fullName,
      phoneNumber,
      NIK,
      address: [address, addressTwo],
    });
  };
  return (
    <div>
      <div className="p-2 m-2 bg-red-400 rounded-full w-36 text-center hover:bg-red-500 cursor-pointer text-slate-100 shadow-md">
        <Link to="/" className="">
          Back To Home
        </Link>
      </div>
      <div className="p-5 mx-60">
        <form className="flex flex-col" onSubmit={onSubmit}>
          <label className="text-4xl font-bold  w-1/2 mb-4">
            Visitor Information
          </label>
          <hr className="w-1/2 mb-4 border-slate-300 opacity-30 border-2 -ml-4"></hr>
          <input
            className="border-2 shadow-sm mt-5 p-2 rounded-md w-56"
            type="text"
            name="name"
            placeholder="Nama"
            required
            onChange={(e) => {
              setfullName(e.target.value);
            }}
          />

          <input
            className="border-2 mt-5 shadow-sm p-2 rounded-md w-56"
            type="text"
            name="name"
            placeholder="Phone Number"
            required
            onChange={(e) => {
              setphoneNumber(e.target.value);
            }}
          />

          <input
            className="border-2 mt-5 shadow-sm p-2 rounded-md w-56"
            type="text"
            name="name"
            placeholder="NIK"
            onChange={(e) => {
              setNIK(e.target.value);
            }}
          />

          <input
            className="border-2 mt-5 shadow-sm p-2 rounded-md w-56"
            type="text"
            name="name"
            placeholder="Address 1"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <input
            className="border-2 mt-5 shadow-sm p-2 rounded-md w-56"
            type="text"
            name="name"
            placeholder="Address 2"
            onChange={(e) => {
              setAddressTwo(e.target.value);
            }}
          />
          <button
            className="mt-10 bg-red-300 px-4 py-2 rounded-full shadow-md text-center text-white hover:bg-red-400 w-28"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddVisitor;
