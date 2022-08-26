const mongoose = require("mongoose");

const { Schema } = mongoose;

const VisitorSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  NIK: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: [String],
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
});

const Visitor = mongoose.model("Visitor", VisitorSchema);

module.exports = Visitor;
