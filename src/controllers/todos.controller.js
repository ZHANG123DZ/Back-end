const { readDB, writeDB } = require('../utils/files.util');
const RESOURCE = 'todos';

const show = async (req, res) => {
  const todos = await readDB(RESOURCE);
  res.json({
    status: 'success',
    data: todos,
  });
};

const index = async (req, res) => {
  const todos = await readDB(RESOURCE);
  const todo = todos.find((todo) => todo.id === +req.params.id);

  if (!todo) {
    res.status(404).json({ status: 'error', message: 'Resource not found' });
    return;
  }

  res.json({
    status: 'success',
    data: todo,
  });
};

const store = async (req, res) => {
  const todos = await readDB(RESOURCE);
  const nextId = (todos.at(-1)?.id ?? 0) + 1;
  const todo = {
    ...req.body,
    id: nextId,
  };

  todos.push(todo);

  await writeDB(RESOURCE, todos);

  res.status(201).json({
    status: 'success',
    data: todo,
  });
};

const update = async (req, res) => {
  const todos = await readDB(RESOURCE);
  const todo = todos.find((todo) => todo.id === +req.params.id);

  if (!todo) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  Object.assign(todo, req.body);

  await writeDB(RESOURCE, todos);

  res.json({ status: 'success', data: todo });
};

const destroy = async (req, res) => {
  const todos = await readDB(RESOURCE);
  const todoIndex = todos.findIndex((todo) => todo.id === +req.params.id);

  if (todoIndex === -1) {
    res.status(404).json({
      status: 'error',
      message: 'Resource not found.',
    });
    return;
  }

  todos.splice(todoIndex, 1);

  await writeDB(RESOURCE, todos);

  res.status(204).send();
};

module.exports = { show, index, store, update, destroy };
