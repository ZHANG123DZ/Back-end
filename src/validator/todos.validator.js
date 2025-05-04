const { checkSchema } = require('express-validator');
const handlerValidationErrors = require('./handleValidationErrors');

exports.createTodoValidator = [
  checkSchema({
    todo: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    completed: {
      isBoolean: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    priority: {
      notEmpty: true,
      isString: true,
      custom: {
        options: (value) => {
          const allowedPriorities = ['high', 'medium', 'low'];
          return allowedPriorities.includes(value);
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    userId: {
      isInt: { options: { min: 0 } },
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];

exports.updateTodoValidator = [
  checkSchema({
    todo: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    completed: {
      optional: true,
      isBoolean: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    priority: {
      optional: true,
      notEmpty: true,
      isString: true,
      custom: {
        options: (value) => {
          const priority = ['high', 'medium', 'low'];
          return priority.includes(value);
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    userId: {
      optional: true,
      isInt: { options: { min: 0 } },
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];
