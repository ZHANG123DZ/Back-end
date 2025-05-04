const { checkSchema } = require('express-validator');
const handlerValidationErrors = require('./handleValidationErrors');

const validateFloatWithRules = require('./validateFloatWithRules');

exports.createProductValidator = [
  checkSchema({
    title: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    description: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    category: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    price: {
      isFloat: { options: { min: 0 } },
      isCurrency: {
        options: {
          allow_decimal: true,
          digits_after_decimal: [1, 2],
          require_symbol: false,
          allow_negatives: false,
          allow_space_after_symbol: false,
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    discountPercentage: {
      optional: true,
      isFloat: { options: { min: 0, max: 100 } },
      custom: {
        options: validateFloatWithRules(2),
      },
      errorMessage:
        'Phần trăm giảm giá phải nằm trong khoảng từ 0% đến 100%, và chỉ có 2 số sau dấu phẩy',
    },
    stock: {
      isInt: { options: { min: 0 } },
      errorMessage: 'Trường này không được để trống',
    },
    tags: {
      optional: true,
      isArray: true,
      custom: {
        options: (value) => {
          return (
            Array.isArray(value) &&
            value.every((tag) => typeof tag === 'string' && tag.length > 0)
          );
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    brand: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    sku: {
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    weight: {
      optional: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    dimensions: {
      isObject: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
      custom: {
        options: (value) => {
          const data = Object.values(value);
          return data.every(
            (dimension) =>
              typeof dimension === 'number' &&
              dimension > 0 &&
              !isNaN(dimension)
          );
        },
      },
    },
    warrantyInformation: {
      optional: true,
      notEmpty: true,
      isString: true,
      errorMessage: 'Trường này không được để trống',
    },
    images: {
      isArray: true,
      custom: {
        options: (value) => {
          return value.every(
            (image) => typeof image === 'string' && image.includes('http')
          );
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    thumbnail: {
      isString: true,
      notEmpty: true,
      isURL: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];

exports.updateProductValidator = [
  checkSchema({
    title: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    description: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    category: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    price: {
      optional: true,
      isFloat: { options: { min: 0 } },
      isCurrency: {
        options: {
          allow_decimal: true,
          digits_after_decimal: [1, 2],
          require_symbol: false,
          allow_negatives: false,
          allow_space_after_symbol: false,
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    discountPercentage: {
      optional: true,
      isFloat: { options: { min: 0, max: 100 } },
      custom: {
        options: validateFloatWithRules(2),
      },
      errorMessage:
        'Phần trăm giảm giá phải nằm trong khoảng từ 0% đến 100%, và chỉ có 2 số sau dấu phẩy',
    },
    stock: {
      optional: true,
      isInt: { options: { min: 0 } },
      errorMessage: 'Trường này không được để trống',
    },
    tags: {
      optional: true,
      isArray: true,
      custom: {
        options: (value) => {
          return (
            Array.isArray(value) &&
            value.every((tag) => typeof tag === 'string' && tag.length > 0)
          );
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    brand: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    sku: {
      optional: true,
      isString: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    weight: {
      optional: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
    },
    dimensions: {
      optional: true,
      isObject: true,
      notEmpty: true,
      errorMessage: 'Trường này không được để trống',
      custom: {
        options: (value) => {
          const data = Object.values(value);
          return data.every(
            (dimension) =>
              typeof dimension === 'number' &&
              dimension > 0 &&
              !isNaN(dimension)
          );
        },
      },
    },
    warrantyInformation: {
      optional: true,
      notEmpty: true,
      isString: true,
      errorMessage: 'Trường này không được để trống',
    },
    images: {
      optional: true,
      isArray: true,
      custom: {
        options: (value) => {
          return value.every(
            (image) => typeof image === 'string' && image.includes('http')
          );
        },
      },
      errorMessage: 'Trường này không được để trống',
    },
    thumbnail: {
      optional: true,
      isString: true,
      notEmpty: true,
      isURL: true,
      errorMessage: 'Trường này không được để trống',
    },
  }),
  handlerValidationErrors,
];
