const productsService = require('@/services/products.service');

const response = require('@/utils/response');
const throwError = require('@/utils/throwError');

const show = async (req, res) => {
  const products = await productsService.getProducts();
  response.success(res, 200, products);
};

const index = async (req, res) => {
  const product = await productsService.getProductById(req.params.id);

  if (!product) throwError(404, 'Not Found.');

  response.success(res, 200, product);
};

const store = async (req, res) => {
  const product = await productsService.createProduct(req.body);

  response.success(res, 201, product);
};

const update = async (req, res) => {
  const product = await productsService.updateProduct(req.params.id, req.body);

  if (!product) throwError(404, "Not Found.");

  response.success(res, 201, product);
};

const destroy = async (req, res) => {
  const result = deleteProduct(req.params.id);

  if (!result) throwError(404, "Not Found");

  response.success(res, 204);
};

module.exports = { show, index, store, update, destroy };
