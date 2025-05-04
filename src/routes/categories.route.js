const express = require('express');
const categoriesController = require('../controllers/categories.controller');

const router = express.Router();

router.get('/', categoriesController.show);
router.get('/:id', categoriesController.index);
router.post('/', categoriesController.store);
router.put('/:id', categoriesController.update);
router.patch('/:id', categoriesController.update);
router.delete('/:id', categoriesController.destroy);

module.exports = router;
