const { printBarcode } = require("../controllers/queueController");

const router = require("express").Router();

router.post("/", printBarcode);

module.exports = router;
