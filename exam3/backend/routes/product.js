const { Router } = require("express")
const { createProduct, updateProduct, deleteProduct, getAllProducts } = require("../controller/product")

const productRouter = Router()

productRouter.get("/all", getAllProducts)

productRouter.post("/create", createProduct)
productRouter.patch("/update/:id", updateProduct)
productRouter.delete("/delete/:id", deleteProduct)

module.exports = productRouter;