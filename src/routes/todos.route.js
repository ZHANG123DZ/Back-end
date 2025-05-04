const express = require('express');
const todosController = require('../controllers/todos.controller');

const router = express.Router();

router.get('/', todosController.show);
router.get('/:id', todosController.index);
router.post('/', todosController.store);
router.put('/:id', todosController.update);
router.patch('/:id', todosController.update);
router.delete('/:id', todosController.destroy);

module.exports = router;
