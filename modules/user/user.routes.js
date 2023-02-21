const validationer = require("../../middlewares/validation");
const { userSignUp, userLogin, userVerify, userUpdate, becomeVendor, forgetPassword, newPassword, contactUs, myOrders} = require("./user.controller");
const { signUpValidate, loginValidate, vendorValidate, updateValidate, becomeVendorValidate, contactUsValidate } = require("./user.validations");
const router = require("express").Router();

router.post("/signUp", validationer(signUpValidate), userSignUp);
router.post("/vendorSignUp", validationer(vendorValidate), userSignUp);
router.get("/verification/:token", userVerify)
router.post("/login", validationer(loginValidate), userLogin);
router.put("/update", validationer(updateValidate), userUpdate);
router.put("/becomeVendor", validationer(becomeVendorValidate), becomeVendor);
router.get("/forgetPassword", forgetPassword);
router.get("/newPassword/:token", newPassword);
router.post("/contactUs", validationer(contactUsValidate), contactUs);
router.get("/myOrders", myOrders);
module.exports = router;