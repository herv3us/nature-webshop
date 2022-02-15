const mongoose = require('mongoose');
const Product = require('./../models/productModel');
// const User = require('./../models/userModel');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      products: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return next();
    }

    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const product = req.body;
    // TODO Måste kolla att man är admin för att lägga till en product...
    // TODO Måste stämma överrens med en inloggad user...

    const newProduct = await Product.create(product);
    res.status(200).json({
      success: true,
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return next();
    }

    const updateProduct = await Product.findByIdAndUpdate(product, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      product: updateProduct,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    await Product.findByIdAndDelete(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted',
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
