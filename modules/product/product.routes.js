const router = require("express").Router();
const validationer = require("../../middlewares/validation");
const { sellProduct, allProducts, getCategories, categoryProducts, getProduct, openProduct } = require("./product.controller");
const { addValidator } = require("./product.validations");

router.post("/add", validationer(addValidator), sellProduct);
router.get("/showAll", allProducts);
router.get("/getCategories", getCategories);
router.get("/categoryProducts", categoryProducts);
router.get("/getProduct", getProduct);
router.get("/:id", openProduct);

module.exports = router;