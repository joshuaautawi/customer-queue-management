const {
  findOrCreateVisitor,
  getVisitors,
} = require("../controllers/visitorController");

const router = require("express").Router();

router.post("/", findOrCreateVisitor);
router.get("/", getVisitors);

module.exports = router;
