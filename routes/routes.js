const { getMyColors } = require("../controller/controller");

const router = require("express").Router();

router.get("/", getMyColors);

module.exports = router;
