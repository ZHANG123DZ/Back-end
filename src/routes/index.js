const express = require('express');
const router = express.Router();

const categoriesRouter = require('./categories.route');
const productsRouter = require('./products.route');
const todosRouter = require('./todos.route');

router.use('/categories', categoriesRouter);
router.use('/products', productsRouter);
router.use('/todos', todosRouter);

module.exports = router;
