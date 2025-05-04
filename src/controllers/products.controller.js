const { readDB, writeDB } = require('../utils/files.util');
const RESOURCE = 'products';

const show = async (req, res) => {
  const products = await readDB(RESOURCE);
  res.json({
    status: 'success',
    data: products,
  });
};

const index = async (req, res) => {
  const products = await readDB(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({ status: 'error', message: 'Resource not found' });
    return;
  }

  res.json({
    status: 'success',
    data: product,
  });
};

const store = async (req, res) => {
  const products = await readDB(RESOURCE);
  const nextId = (products.at(-1)?.id ?? 0) + 1;
  const product = {
    ...req.body,
    id: nextId,
  };

  products.push(product);

  await writeDB(RESOURCE, products);

  res.status(201).json({
    status: 'success',
    data: product,
  });
};

const update = async (req, res) => {
  const products = await readDB(RESOURCE);
  const product = products.find((product) => product.id === +req.params.id);

  if (!product) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  Object.assign(product, req.body);

  await writeDB(RESOURCE, products);

  res.json({ status: 'success', data: product });
};

const destroy = async (req, res) => {
  const products = await readDB(RESOURCE);
  const productIndex = products.findIndex(
    (product) => product.id === +req.params.id
  );

  if (productIndex === -1) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  products.splice(productIndex, 1);

  await writeDB(RESOURCE, products);

  res.status(204).send();
};

module.exports = { show, index, store, update, destroy };
