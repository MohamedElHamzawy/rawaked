require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { userRoutes, productRoutes, cartRoutes, orderRoutes, adminRoutes } = require("./routes/allRoutes");

const app = express();
app.use(express.json());

app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)
app.use("/api/admin", adminRoutes)

const port = parseInt(process.env.PORT);
const con = process.env.CON;
const server = app.listen(port, async()=>{
    await mongoose
    .connect(con)
    .then(console.log("Everything is okay and running ..."))
})