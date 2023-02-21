const { checkOut, makeOrder } = require("./order.controller");
const validationer = require("../../middlewares/validation");
const { makeOrderValidate } = require("./order.validation");
const router = require("express").Router();

router.get("/checkOut", checkOut);
router.post("/make", validationer(makeOrderValidate), makeOrder);

module.exports = router;