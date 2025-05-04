const express = require('express');
const productsController = require('../controllers/products.controller');

const {
  createProductValidator,
  updateProductValidator,
} = require('../validator/products.validator');

const router = express.Router();

router.get('/', productsController.show);
router.get('/:id', productsController.index);
router.post('/', createProductValidator, productsController.store);
router.put('/:id', updateProductValidator, productsController.update);
router.patch('/:id', updateProductValidator, productsController.update);
router.delete('/:id', productsController.destroy);

module.exports = router;
