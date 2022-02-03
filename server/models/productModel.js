const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
  },
  category: {
    type: String,
    required: [true, 'Please enter a category'],
  },
  description: {
    type: String,
    required: [true, 'Please enter a description for the product'],
  },
  imgUrl: {
    type: String,
    required: [true, 'Please enter an url for an image, for the product'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price for the product'],
  },
  stock: {
    type: Number,
    required: [true, 'Please enter how many therre are in stock'],
  },
});

productSchema.set('toJSON', {
  transform: (document, returnedObj) => {
    (returnedObj.id = returnedObj._id.toString()),
      delete returnedObj._id,
      delete returnedObj.__v;
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
