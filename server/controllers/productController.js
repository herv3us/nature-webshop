const mongoose = require('mongoose');
const Product = require('./../models/productModel');
const User = require('./../models/userModel');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.status(200).josn({
      success: true,
      pruducts: products,
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductById = (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return next();
    }

    res.status(200).json({
      sccuess: true,
      product: product,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
