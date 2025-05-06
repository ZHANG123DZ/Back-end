const { checkSchema } = require('express-validator');
const handlerValidationErrors = require('./handleValidationErrors');

exports.createCategoryValidator = [
  checkSchema({
    name: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    slug: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    description: {
      notEmpty: true,
      isString: true,
      errorMessage: 'Trường này không được để trống',
    },
    image: {
      isURL: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];

exports.updateCategoryValidator = [
  checkSchema({
    name: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    slug: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    description: {
      optional: true,
      notEmpty: true,
      isString: true,
      errorMessage: 'Trường này không được để trống',
    },
    image: {
      optional: true,
      isURL: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];
