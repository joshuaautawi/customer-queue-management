const Queue = require("../models/Queue");

const printBarcode = async (req, res) => {
  const { queueCode = "A" } = req.body;
  const today = new Date().getTime();
  const lastestQueue = await Queue.findOne({
    queueCode,
    queueDate: new Date().toDateString(),
  }).sort("-createdDate");

  const data = await Queue.create({
    queueNumber: lastestQueue
      ? (Number(lastestQueue.queueNumber) + 1).toString().padStart(3, "0")
      : "1".padStart(3, "0"),
    queueCode,
    queueDate: new Date().toDateString(),
    createdDate: today.toString(),
  });
  return res.status(201).json({ status: "success", data });
};

module.exports = { printBarcode };
