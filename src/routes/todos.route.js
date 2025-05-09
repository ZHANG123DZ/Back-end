const express = require('express');
const todosController = require('@/controllers/todos.controller');
const {
  createTodoValidator,
  updateTodoValidator,
} = require('@/validator/todos.validator');
const router = express.Router();

router.get('/', todosController.show);
router.get('/:id', todosController.index);
router.post('/', createTodoValidator, todosController.store);
router.put('/:id', updateTodoValidator, todosController.update);
router.patch('/:id', updateTodoValidator, todosController.update);
router.delete('/:id', todosController.destroy);

module.exports = router;
