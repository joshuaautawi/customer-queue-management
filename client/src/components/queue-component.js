import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Barcode from "react-barcode";
const generateQueueURL = "http://localhost:3002/queue";

function Queue() {
  const [loading, setLoading] = useState(false);
  const [queueNumber, setQueueNumber] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  useEffect(() => {
    GetQueue();
  }, "");

  const GetQueue = async () => {
    const data = await axios.post(generateQueueURL);
    setQueueNumber(`${data.data.data.queueCode}-${data.data.data.queueNumber}`);
    setCreatedDate(
      new Date(Number(data.data.data.createdDate)).toLocaleString()
    );
    setLoading(false);
  };
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      <div className="p-2 m-2  bg-red-400 rounded-full w-36 text-center text-slate-100 hover:bg-red-500 cursor-pointer">
        <Link to="/">Back To Home</Link>
      </div>
      <div className="w-1/3 text-center mx-40 my-16">
        {loading && <h1>Loading...</h1>}
        <p className="font-bold">ALMEGATEX</p>
        <hr className="border-4 border-black"></hr>
        <p>Nomor antrian anda: </p>
        {!loading && <p className="text-7xl">{queueNumber}</p>}
        <p>Mohon Menunggu</p>
        <div className="-mx-10">
          <Barcode value="               " />
        </div>

        {!loading && <p>{createdDate}</p>}
        <hr className="border-4 border-black"></hr>
        <p className="font-bold">Budayakan antri untuk kenyamanan bersama</p>
        <p className="font-bold">Terima Kasih atas kunjungan anda</p>
      </div>
    </div>
  );
}

export default Queue;
