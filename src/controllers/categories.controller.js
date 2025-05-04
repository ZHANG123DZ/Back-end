const { readDB, writeDB } = require('../utils/files.util');
const RESOURCE = 'categories';

const show = async (req, res) => {
  const categories = await readDB(RESOURCE);
  res.json({
    status: 'success',
    data: categories,
  });
};

const index = async (req, res) => {
  const categories = await readDB(RESOURCE);
  const category = categories.find(
    (category) => category.id === +req.params.id
  );

  if (!category) {
    res.status(404).json({ status: 'error', message: 'Resource not found' });
    return;
  }

  res.json({
    status: 'success',
    data: category,
  });
};

const store = async (req, res) => {
  const categories = await readDB(RESOURCE);
  const nextId = (categories.at(-1)?.id ?? 0) + 1;
  const category = {
    ...req.body,
    id: nextId,
  };

  categories.push(category);

  await writeDB(RESOURCE, categories);

  res.status(201).json({
    status: 'success',
    data: category,
  });
};

const update = async (req, res) => {
  const categories = await readDB(RESOURCE);
  const category = categories.find(
    (category) => category.id === +req.params.id
  );

  if (!category) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  Object.assign(category, req.body);

  await writeDB(RESOURCE, categories);

  res.json({ status: 'success', data: category });
};

const destroy = async (req, res) => {
  const categories = await readDB(RESOURCE);
  const categoryIndex = categories.findIndex(
    (category) => category.id === +req.params.id
  );

  if (categoryIndex === -1) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  categories.splice(categoryIndex, 1);

  await writeDB(RESOURCE, categories);

  res.status(204).send();
};

module.exports = { show, index, store, update, destroy };
