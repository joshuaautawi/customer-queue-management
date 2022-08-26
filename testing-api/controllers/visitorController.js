const Visitor = require("../models/Visitor");

const findOrCreateVisitor = async (req, res) => {
  try {
    const { fullName, phoneNumber, address, NIK } = req.body;
    const today = new Date().getTime();
    const findVisitor = await Visitor.findOne({ NIK });
    if (findVisitor)
      return res.status(200).json({ status: "success", data: findVisitor });
    const data = await Visitor.create({
      fullName,
      phoneNumber,
      address,
      NIK,
      createdDate: today.toString(),
    });
    return res.status(201).json({ status: "success", data });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error !" });
  }
};

const getVisitors = async (req, res) => {
  try {
    const { date } = req.body;
    const visitors = await Visitor.find();

    return res.status(200).json({ status: "success", data: visitors });
  } catch (error) {
    return res
      .status(500)
      .json({ status: "failed", message: "Internal Server Error !" });
  }
};

module.exports = { findOrCreateVisitor, getVisitors };
