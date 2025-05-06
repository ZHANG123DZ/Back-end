const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const {
  createCategoryValidator,
  updateCategoryValidator,
} = require('../validator/categories.validator');
const router = express.Router();

router.get('/', categoriesController.show);
router.get('/:id', categoriesController.index);
router.post('/', createCategoryValidator, categoriesController.store);
router.put('/:id', updateCategoryValidator, categoriesController.update);
router.patch('/:id', updateCategoryValidator, categoriesController.update);
router.delete('/:id', categoriesController.destroy);

module.exports = router;
