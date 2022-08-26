const router = require("express").Router();
const visitorRoute = require("./visitor.route");
const queueRoute = require("./queue.route");

router.use("/visitor", visitorRoute);
router.use("/queue", queueRoute);

module.exports = router;
