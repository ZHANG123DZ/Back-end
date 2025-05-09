const { readDB, writeDB } = require('@/utils/files.util');
const RESOURCE = 'products';

const getProducts = async () => {
  const products = await readDB(RESOURCE);
  return products;
};

const getProductById = async (id) => {
  const products = await readDB(RESOURCE);
  const product = products.find((product) => product.id === +id);

  return product;
};
const createProduct = async (data) => {
  const products = await readDB(RESOURCE);
  const nextId = (products.at(-1)?.id ?? 0) + 1;
  const product = {
    ...data,
    id: nextId,
  };

  products.push(product);

  await writeDB(RESOURCE, products);
  return products;
};
const updateProduct = async (id, data) => {
  const products = await readDB(RESOURCE);
  const product = await getProductById(id);
  if (!product) return;
  Object.assign(product, data);

  await writeDB(RESOURCE, products);
  return product;
};

const deleteProduct = async (id) => {
  const products = await readDB(RESOURCE);
  const productIndex = products.findIndex((product) => product.id === +id);
  if (productIndex === -1) return;
  products.splice(productIndex, 1);
  await writeDB(RESOURCE, products);

  return productIndex;
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
