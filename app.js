// Frontend logic wired to backend API

const api = {
  async list() {
    const res = await fetch('/api/tasks');
    return res.json();
  },
  async create(text, dueDate = null) {
    const res = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, dueDate })
    });
    return res.json();
  },
  async update(id, data) {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return res.json();
  },
  async remove(id) {
    const res = await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    return res.json();
  }
};

// Format date for display
function formatDate(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const now = new Date();
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
}

function formatDueDate(isoString) {
  if (!isoString) return null;
  const date = new Date(isoString);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const dueDate = new Date(date);
  dueDate.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((dueDate - now) / 86400000);

  if (diffDays < 0) return { text: 'Overdue', class: 'overdue' };
  if (diffDays === 0) return { text: 'Today', class: 'today' };
  if (diffDays === 1) return { text: 'Tomorrow', class: 'tomorrow' };
  if (diffDays < 7) return { text: `${diffDays}d`, class: 'upcoming' };
  
  return { 
    text: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), 
    class: 'future' 
  };
}

async function render() {
  const tasks = await api.list();
  const ul = document.getElementById('taskItem');
  if (!ul) return;
  ul.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.className = t.completed ? 'taskItem completed' : 'taskItem';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = !!t.completed;
    checkbox.addEventListener('change', async () => {
      await api.update(t.id, { completed: checkbox.checked });
      li.classList.toggle('completed', checkbox.checked);
      updateStats();
    });

    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    const p = document.createElement('p');
    p.textContent = t.text;
    taskContent.appendChild(p);

    const timeInfo = document.createElement('div');
    timeInfo.className = 'task-time-info';
    
    const createdSpan = document.createElement('span');
    createdSpan.className = 'task-created';
    createdSpan.textContent = `📅 ${formatDate(t.createdAt)}`;
    timeInfo.appendChild(createdSpan);

    if (t.dueDate) {
      const dueInfo = formatDueDate(t.dueDate);
      const dueSpan = document.createElement('span');
      dueSpan.className = `task-due ${dueInfo.class}`;
      dueSpan.textContent = `⏰ ${dueInfo.text}`;
      timeInfo.appendChild(dueSpan);
    }

    taskContent.appendChild(timeInfo);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const editBtn = document.createElement('img');
    editBtn.src = '../assets/edit_1159633.png';
    editBtn.alt = 'Edit Task';
    editBtn.style.cursor = 'pointer';
    editBtn.addEventListener('click', async () => {
      const newText = prompt('Edit task:', t.text);
      if (newText && newText.trim() && newText.trim() !== t.text) {
        await api.update(t.id, { text: newText.trim() });
        await render();
      }
    });

    const delBtn = document.createElement('img');
    delBtn.src = '../assets/delete_11088810.png';
    delBtn.alt = 'Delete Task';
    delBtn.style.cursor = 'pointer';
    delBtn.addEventListener('click', async () => {
      if (confirm('Are you sure you want to delete this task?')) {
        await api.remove(t.id);
        await render();
      }
    });

    actions.appendChild(editBtn);
    actions.appendChild(delBtn);

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(actions);
    ul.appendChild(li);
  });
  updateStats();
}

async function updateStats() {
  const tasks = await api.list();
  const done = tasks.filter(t => t.completed).length;
  const total = tasks.length;
  const numbers = document.getElementById('numbers');
  if (numbers) numbers.textContent = `${done}/${total}`;
  const progress = document.getElementById('progress');
  const percent = total ? Math.round((done / total) * 100) : 0;
  if (progress) progress.style.width = `${percent}%`;
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('taskForm');
  const input = document.getElementById('taskInput');
  const dueDateInput = document.getElementById('dueDateInput');
  if (form && input) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      const dueDate = dueDateInput.value || null;
      await api.create(text, dueDate);
      input.value = '';
      dueDateInput.value = '';
      await render();
    });
  }
  render();
});
