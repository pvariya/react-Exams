const Product = require("../models/product");


const createProduct = async (req, res) => {
   
    try {
        let product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}


const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find()
        res.status(200).send(products)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params
        let product = Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(product)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}
const deleteProduct = async(req,res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send({msg:"Product deleted successfully"})
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}


module.exports = {getAllProducts,updateProduct,deleteProduct,createProduct}