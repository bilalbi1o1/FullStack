const Product = require('../models/Product');

// Create a new product
const addProduct = async (req, res) => {
    const newProduct = new Product(req.body);
 await newProduct.save();
 res.status(201).json(newProduct);
}

// Get all products
const allProducts = async (req,res) => {
    console.log("Display All")
    const products = await Product.find();
 res.json(products);
}

// Update a product
const updateProduct = async (req,res) => {
    console.log("here");
const updatedProduct = await Product.findByIdAndUpdate(req.params.id, 
req.body, { new: true });
 res.json(updatedProduct);
};
// Delete a product
const deleteProduct = async (req, res) => {
 await Product.findByIdAndDelete(req.params.id);
 res.json({ message: 'Product deleted' });
};

module.exports = {addProduct,allProducts,updateProduct,deleteProduct};
