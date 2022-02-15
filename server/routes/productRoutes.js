const { Router } = require('express');
const router = new Router();
const productController = require('./../controllers/productController');

// get all the products
router.get('/', productController.getAllProducts);

// get pruduct by id
router.get('/:id', productController.getProductById);

// create new product for the shop
router.post('/', productController.createProduct);

// update product
router.put('/:id', productController.updateProduct);

// delte product
router.delete('/:id', productController.deleteProduct);

module.exports = router;
