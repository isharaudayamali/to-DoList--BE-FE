const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const dataDir = path.join(__dirname, 'data');
const dataFile = path.join(dataDir, 'tasks.json');

// Ensure data directory and file exist
function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify([]), 'utf8');
  }
}

function readTasks() {
  ensureDataFile();
  const raw = fs.readFileSync(dataFile, 'utf8');
  try { return JSON.parse(raw); } catch { return []; }
}

function writeTasks(tasks) {
  ensureDataFile();
  fs.writeFileSync(dataFile, JSON.stringify(tasks, null, 2));
}

app.use(express.json());

// Serve static files (frontend)
app.use(express.static(__dirname));

// CRUD API
app.get('/api/tasks', (req, res) => {
  res.json(readTasks());
});

app.post('/api/tasks', (req, res) => {
  const { text, dueDate } = req.body;
  if (!text || typeof text !== 'string') return res.status(400).json({ error: 'text is required' });
  const tasks = readTasks();
  const newTask = { 
    id: Date.now().toString(), 
    text: text.trim(), 
    completed: false,
    createdAt: new Date().toISOString(),
    dueDate: dueDate || null
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed, dueDate } = req.body;
  const tasks = readTasks();
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  if (typeof text === 'string') tasks[idx].text = text.trim();
  if (typeof completed === 'boolean') tasks[idx].completed = completed;
  if (dueDate !== undefined) tasks[idx].dueDate = dueDate;
  writeTasks(tasks);
  res.json(tasks[idx]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const idx = tasks.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ error: 'not found' });
  const removed = tasks.splice(idx, 1)[0];
  writeTasks(tasks);
  res.json(removed);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
