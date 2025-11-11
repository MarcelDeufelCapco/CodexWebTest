const express = require('express');
const app = express();
app.use(express.json());

let todos = [{ id: 1, title: "Try Codex Web", completed: false }];

app.get('/todos', (req, res) => res.json(todos));
app.post('/todos', (req, res) => {
  const id = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
  const todo = { id, title: req.body.title ?? "Untitled", completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

module.exports = app;
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API on :${port}`));
}
