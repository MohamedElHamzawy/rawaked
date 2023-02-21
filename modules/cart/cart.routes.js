const { showCart, addProduct } = require("./cart.controller");

const router = require("express").Router();

router.get("/show", showCart)
router.post("/addProduct", addProduct)

module.exports = router