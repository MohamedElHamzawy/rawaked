const router = require("express").Router();
const { 
    deleteProduct, updateProduct, acceptProduct, getProducts, 
    getVendors, deleteVendor, updateVendor, acceptVendor, openVendor, vendorProducts, 
    getOrders, deleteOrder, updateOrder, acceptOrder, soldOrder } = require("./admin.controller");

router.get("/product/get", getProducts);
router.delete("/product/delete", deleteProduct);
router.put("/product/update", updateProduct);
router.post("/product/accept", acceptProduct);
router.get("/vendors/get", getVendors);
router.delete("/vendors/delete", deleteVendor);
router.put("/vendors/update", updateVendor);
router.post("/vendors/accept", acceptVendor);
router.get("/vendors/view", openVendor);
router.get("/vendors/view/products", vendorProducts);
router.get("/orders/get", getOrders);
router.delete("/orders/delete", deleteOrder);
router.put("/orders/update", updateOrder);
router.post("/orders/accept", acceptOrder);
router.post("/orders/sold", soldOrder);

module.exports = router