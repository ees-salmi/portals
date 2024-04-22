let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Student Model
let productSchema = require('../models/Product');
// CREATE Student
router.post('/create-product', async (req, res, next) => {
  try {
    const createdProduct = await productSchema.create(req.body);
    console.log(createdProduct);
    res.json(createdProduct);
  } catch (error) {
    next(error);
    console.log(error);
  }
});
// READ products
router.get('/', async (req, res, next) => {
  try {
    const query = {};
    if (req.query.category) {
      query.category = req.query.category;
    }
    const products = await productSchema.find(query);
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Get Single Product
router.get('/edit-product/:id', async (req, res, next) => {
  try {
    const product = await productSchema.findById(req.params.id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Update Product
router.put('/update-product/:id', async (req, res, next) => {
  try {
    const updatedProduct = await productSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedProduct);
    console.log('Product updated successfully!');
  } catch (error) {
    next(error);
  }
});

// Delete Product
router.delete('/delete-product/:id', async (req, res, next) => {
  try {
    const deletedProduct = await productSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: deletedProduct });
  } catch (error) {
    next(error);
  }
});
module.exports = router;