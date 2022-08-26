const mongoose = require("mongoose");

const { Schema } = mongoose;

const QueueSchema = new Schema({
  queueNumber: {
    type: String,
    required: true,
  },
  queueCode: {
    type: String,
    required: true,
  },
  queueDate: {
    type: String,
    required: true,
  },
  createdDate: {
    type: String,
    required: true,
  },
});

const Queue = mongoose.model("Queue", QueueSchema);

module.exports = Queue;
