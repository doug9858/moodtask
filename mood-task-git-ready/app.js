const STORAGE_KEYS = {
  tasks: 'moodtask.tasks.v1',
  history: 'moodtask.history.v1',
  prefs: 'moodtask.preferences.v1'
};

const OPTIONS = {
  lifeAreas: [
    'Family', 'Friends', 'Relationship', 'Health', 'Home', 'Career', 'Money',
    'Creativity', 'Spirituality', 'Learning', 'Rest', 'Self-care', 'Admin', 'Fun'
  ],
  energies: ['Low', 'Medium', 'High'],
  times: ['Morning', 'Afternoon', 'Evening', 'Late night', 'Weekend', 'Work break'],
  moods: [
    'Anxious', 'Sad', 'Calm', 'Motivated', 'Tired', 'Restless', 'Lonely',
    'Focused', 'Overwhelmed', 'Grateful', 'Bored', 'Reflective'
  ],
  difficulties: ['Easy', 'Moderate', 'Challenging'],
  types: ['Connection', 'Chore', 'Planning', 'Care', 'Creative', 'Learning', 'Movement', 'Rest', 'Admin', 'Fun']
};

const STARTER_TASKS = [
  {
    title: 'Text one family member something kind or appreciative',
    lifeAreas: ['Family'],
    energy: ['Low'],
    times: ['Evening', 'Late night'],
    moods: ['Lonely', 'Reflective', 'Grateful', 'Calm'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Connection',
    repeatable: true,
    notes: 'Keep it short and warm. One sentence is enough.'
  },
  {
    title: 'Set a reminder to call or check in with someone tomorrow',
    lifeAreas: ['Family', 'Friends'],
    energy: ['Low'],
    times: ['Late night', 'Evening'],
    moods: ['Tired', 'Reflective', 'Overwhelmed'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Planning',
    repeatable: true,
    notes: 'This counts even if you do not call tonight.'
  },
  {
    title: 'Write down one thing you appreciate about someone in your family',
    lifeAreas: ['Family'],
    energy: ['Low'],
    times: ['Late night', 'Morning', 'Evening'],
    moods: ['Grateful', 'Reflective', 'Calm', 'Sad'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Connection',
    repeatable: true,
    notes: 'You can keep it private or send it later.'
  },
  {
    title: 'Reply to one family message you have been avoiding',
    lifeAreas: ['Family'],
    energy: ['Medium'],
    times: ['Afternoon', 'Evening', 'Weekend'],
    moods: ['Anxious', 'Overwhelmed', 'Focused'],
    duration: 10,
    difficulty: 'Moderate',
    location: 'Anywhere',
    type: 'Connection',
    repeatable: true,
    notes: 'Use a simple reply. You do not need to solve everything.'
  },
  {
    title: 'Clear one small surface',
    lifeAreas: ['Home'],
    energy: ['Low', 'Medium'],
    times: ['Morning', 'Afternoon', 'Evening'],
    moods: ['Restless', 'Overwhelmed', 'Bored'],
    duration: 10,
    difficulty: 'Easy',
    location: 'Home',
    type: 'Chore',
    repeatable: true,
    notes: 'Choose the smallest visible surface and stop when it is better.'
  },
  {
    title: 'Put five things back where they belong',
    lifeAreas: ['Home'],
    energy: ['Low'],
    times: ['Morning', 'Evening', 'Late night'],
    moods: ['Tired', 'Restless', 'Overwhelmed', 'Bored'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Home',
    type: 'Chore',
    repeatable: true,
    notes: 'Exactly five is enough.'
  },
  {
    title: 'Set clothes or essentials out for tomorrow',
    lifeAreas: ['Home', 'Self-care'],
    energy: ['Low'],
    times: ['Evening', 'Late night'],
    moods: ['Tired', 'Anxious', 'Overwhelmed'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Home',
    type: 'Planning',
    repeatable: true,
    notes: 'Make tomorrow a little easier.'
  },
  {
    title: 'Drink water and take three slow breaths',
    lifeAreas: ['Health', 'Self-care'],
    energy: ['Low'],
    times: ['Morning', 'Afternoon', 'Evening', 'Late night', 'Work break'],
    moods: ['Anxious', 'Sad', 'Tired', 'Overwhelmed', 'Restless'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Care',
    repeatable: true,
    notes: 'Make it tiny. Water first, then breathe.'
  },
  {
    title: 'Do a two-minute shoulder and neck stretch',
    lifeAreas: ['Health', 'Self-care'],
    energy: ['Low', 'Medium'],
    times: ['Morning', 'Afternoon', 'Evening', 'Work break'],
    moods: ['Anxious', 'Focused', 'Tired', 'Restless'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Movement',
    repeatable: true,
    notes: 'No equipment needed.'
  },
  {
    title: 'Write one thing you can control right now',
    lifeAreas: ['Self-care'],
    energy: ['Low'],
    times: ['Morning', 'Afternoon', 'Evening', 'Late night'],
    moods: ['Anxious', 'Overwhelmed', 'Sad', 'Restless'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Care',
    repeatable: true,
    notes: 'Aim for one concrete next action.'
  },
  {
    title: 'Draft one work email or message without sending it yet',
    lifeAreas: ['Career'],
    energy: ['Medium', 'High'],
    times: ['Morning', 'Afternoon', 'Work break'],
    moods: ['Focused', 'Motivated', 'Anxious'],
    duration: 15,
    difficulty: 'Moderate',
    location: 'Anywhere',
    type: 'Admin',
    repeatable: true,
    notes: 'Drafting counts. Sending is optional.'
  },
  {
    title: 'Review your top three priorities for the week',
    lifeAreas: ['Career', 'Admin'],
    energy: ['Medium'],
    times: ['Morning', 'Afternoon', 'Weekend'],
    moods: ['Focused', 'Motivated', 'Overwhelmed'],
    duration: 10,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Planning',
    repeatable: true,
    notes: 'Circle the one that matters most next.'
  },
  {
    title: 'Move one bill, receipt, or financial reminder to the right place',
    lifeAreas: ['Money', 'Admin'],
    energy: ['Low', 'Medium'],
    times: ['Morning', 'Afternoon', 'Evening', 'Weekend'],
    moods: ['Anxious', 'Overwhelmed', 'Focused'],
    duration: 10,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Admin',
    repeatable: true,
    notes: 'Do not organize everything. Just one item.'
  },
  {
    title: 'Capture one creative idea in notes',
    lifeAreas: ['Creativity', 'Fun'],
    energy: ['Low'],
    times: ['Morning', 'Evening', 'Late night', 'Weekend'],
    moods: ['Bored', 'Reflective', 'Restless', 'Motivated'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Creative',
    repeatable: true,
    notes: 'Messy is fine. Save the spark.'
  },
  {
    title: 'Watch or read one short lesson on something you are curious about',
    lifeAreas: ['Learning'],
    energy: ['Medium', 'High'],
    times: ['Afternoon', 'Evening', 'Weekend'],
    moods: ['Bored', 'Focused', 'Motivated', 'Restless'],
    duration: 15,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Learning',
    repeatable: true,
    notes: 'Stop after one small lesson.'
  },
  {
    title: 'Take a real five-minute rest with no productivity goal',
    lifeAreas: ['Rest', 'Self-care'],
    energy: ['Low'],
    times: ['Afternoon', 'Evening', 'Late night', 'Weekend', 'Work break'],
    moods: ['Tired', 'Overwhelmed', 'Sad', 'Anxious'],
    duration: 5,
    difficulty: 'Easy',
    location: 'Anywhere',
    type: 'Rest',
    repeatable: true,
    notes: 'Set a timer and let it count.'
  }
];

let tasks = [];
let history = [];
let currentGeneratedTaskId = null;
let deferredInstallPrompt = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function makeId(prefix = 'id') {
  if (window.crypto && crypto.randomUUID) return `${prefix}-${crypto.randomUUID()}`;
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowIso() {
  return new Date().toISOString();
}

function parseJson(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
  localStorage.setItem(STORAGE_KEYS.history, JSON.stringify(history));
}

function normalizeTask(task) {
  return {
    id: task.id || makeId('task'),
    title: task.title || 'Untitled task',
    lifeAreas: Array.isArray(task.lifeAreas) ? task.lifeAreas : [],
    energy: Array.isArray(task.energy) ? task.energy : [],
    times: Array.isArray(task.times) ? task.times : [],
    moods: Array.isArray(task.moods) ? task.moods : [],
    duration: Number(task.duration || 5),
    difficulty: task.difficulty || 'Easy',
    location: task.location || 'Anywhere',
    type: task.type || 'Care',
    repeatable: task.repeatable !== false,
    notes: task.notes || '',
    createdAt: task.createdAt || nowIso(),
    updatedAt: task.updatedAt || nowIso(),
    completedCount: Number(task.completedCount || 0),
    skippedCount: Number(task.skippedCount || 0),
    lastCompletedAt: task.lastCompletedAt || null,
    lastSkippedAt: task.lastSkippedAt || null
  };
}

function starterTasksWithIds() {
  return STARTER_TASKS.map((task) => normalizeTask({ ...task, id: makeId('task'), createdAt: nowIso(), updatedAt: nowIso() }));
}

function loadState() {
  tasks = parseJson(localStorage.getItem(STORAGE_KEYS.tasks), null);
  history = parseJson(localStorage.getItem(STORAGE_KEYS.history), []);

  if (!Array.isArray(tasks) || tasks.length === 0) {
    tasks = starterTasksWithIds();
  } else {
    tasks = tasks.map(normalizeTask);
  }

  if (!Array.isArray(history)) history = [];
  saveState();
}

function fillSelect(select, options, includeAny = true, anyLabel = 'Any') {
  select.innerHTML = '';
  if (includeAny) {
    const any = document.createElement('option');
    any.value = 'Any';
    any.textContent = anyLabel;
    select.appendChild(any);
  }
  options.forEach((option) => {
    const el = document.createElement('option');
    el.value = option;
    el.textContent = option;
    select.appendChild(el);
  });
}

function createChipGroup(container, name, options) {
  container.innerHTML = '';
  options.forEach((option) => {
    const label = document.createElement('label');
    label.className = 'chip';
    label.innerHTML = `<input type="checkbox" name="${name}" value="${escapeHtml(option)}"><span>${escapeHtml(option)}</span>`;
    container.appendChild(label);
  });
}

function getCheckedValues(name) {
  return $$(`input[name="${name}"]:checked`).map((input) => input.value);
}

function setCheckedValues(name, values) {
  $$(`input[name="${name}"]`).forEach((input) => {
    input.checked = values.includes(input.value);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function formatDateTime(iso) {
  if (!iso) return 'Never';
  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(new Date(iso));
}

function hoursSince(iso) {
  if (!iso) return Infinity;
  return (Date.now() - new Date(iso).getTime()) / 36e5;
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('show');
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => el.classList.remove('show'), 2400);
}

function switchScreen(name) {
  $$('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === `screen-${name}`));
  $$('.nav-button').forEach((button) => {
    const active = button.dataset.screen === name;
    button.classList.toggle('active', active);
    button.setAttribute('aria-selected', String(active));
  });
  if (name === 'library') renderTaskList();
  if (name === 'history') renderHistory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function readPrefsFromForm() {
  const prefs = {
    lifeArea: $('#prefLifeArea').value,
    energy: $('#prefEnergy').value,
    time: $('#prefTime').value,
    mood: $('#prefMood').value,
    duration: $('#prefDuration').value,
    avoidRecent: $('#prefAvoidRecent').checked
  };
  localStorage.setItem(STORAGE_KEYS.prefs, JSON.stringify(prefs));
  return prefs;
}

function restorePrefs() {
  const prefs = parseJson(localStorage.getItem(STORAGE_KEYS.prefs), {});
  if (prefs.lifeArea) $('#prefLifeArea').value = prefs.lifeArea;
  if (prefs.energy) $('#prefEnergy').value = prefs.energy;
  if (prefs.time) $('#prefTime').value = prefs.time;
  if (prefs.mood) $('#prefMood').value = prefs.mood;
  if (prefs.duration) $('#prefDuration').value = prefs.duration;
  if (typeof prefs.avoidRecent === 'boolean') $('#prefAvoidRecent').checked = prefs.avoidRecent;
}

function fieldMatches(taskValues, selected) {
  return selected === 'Any' || taskValues.includes(selected);
}

function scoreTask(task, prefs, strict = true) {
  let score = 0;
  const reasons = [];
  const missing = [];

  const checks = [
    { key: 'lifeArea', label: 'life area', weight: 5, values: task.lifeAreas },
    { key: 'energy', label: 'energy', weight: 4, values: task.energy },
    { key: 'time', label: 'time', weight: 3, values: task.times },
    { key: 'mood', label: 'mood', weight: 3, values: task.moods }
  ];

  checks.forEach((check) => {
    const selected = prefs[check.key];
    if (selected === 'Any') {
      score += 1;
      return;
    }
    if (check.values.includes(selected)) {
      score += check.weight;
      reasons.push(`${check.label}: ${selected}`);
    } else {
      missing.push(check.label);
    }
  });

  if (prefs.duration !== 'Any') {
    const maxDuration = Number(prefs.duration);
    if (task.duration <= maxDuration) {
      score += 2;
      reasons.push(`${task.duration} min`);
    } else {
      missing.push('duration');
    }
  }

  if (strict && missing.length > 0) return null;

  if (!task.repeatable && task.lastCompletedAt) return null;

  if (prefs.avoidRecent) {
    if (hoursSince(task.lastCompletedAt) < 18) return null;
    if (hoursSince(task.lastSkippedAt) < 3) return null;
  }

  const freshnessBonus = Math.max(0, 5 - (task.completedCount || 0));
  score += freshnessBonus;

  return {
    task,
    score: Math.max(score, 1),
    reasons,
    missing
  };
}

function weightedRandom(matches) {
  const total = matches.reduce((sum, match) => sum + match.score, 0);
  let cursor = Math.random() * total;
  for (const match of matches) {
    cursor -= match.score;
    if (cursor <= 0) return match;
  }
  return matches[matches.length - 1];
}

function generateTask() {
  const prefs = readPrefsFromForm();
  let matches = tasks
    .map((task) => scoreTask(task, prefs, true))
    .filter(Boolean);
  let relaxed = false;

  if (matches.length === 0) {
    matches = tasks
      .map((task) => scoreTask(task, prefs, false))
      .filter(Boolean)
      .filter((match) => match.score >= 3)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
    relaxed = true;
  }

  if (matches.length === 0) {
    currentGeneratedTaskId = null;
    $('#generatedTask').innerHTML = `
      <div class="card empty-state">
        <h3>No matching task found yet</h3>
        <p>Add more tasks, clear one or two preferences, or turn off recent-task avoidance.</p>
        <button class="primary" type="button" data-action="go-add">Add a task</button>
      </div>`;
    return;
  }

  const chosen = weightedRandom(matches);
  currentGeneratedTaskId = chosen.task.id;
  renderGeneratedTask(chosen, relaxed);
}

function renderGeneratedTask(match, relaxed = false) {
  const task = match.task;
  const quality = relaxed ? 'Near match' : 'Strong match';
  const reasonText = match.reasons.length ? match.reasons.join(' · ') : 'Chosen from your available tasks';
  const missingText = relaxed && match.missing.length ? `<p class="meta-line">Relaxed: did not exactly match ${escapeHtml(match.missing.join(', '))}.</p>` : '';

  $('#generatedTask').innerHTML = `
    <article class="card task-card">
      <div class="task-card-inner">
        <div class="task-title-row">
          <h3>${escapeHtml(task.title)}</h3>
          <span class="score-pill">${quality}</span>
        </div>
        <div class="tag-row">${taskTags(task).join('')}</div>
        ${task.notes ? `<p class="notes">${escapeHtml(task.notes)}</p>` : ''}
        <p class="meta-line">${escapeHtml(reasonText)}</p>
        ${missingText}
        <p class="meta-line">${task.duration} min · ${escapeHtml(task.difficulty)} · ${escapeHtml(task.location)} · ${escapeHtml(task.type)}</p>
        <div class="button-row">
          <button class="primary" type="button" data-action="complete" data-id="${task.id}">Complete</button>
          <button class="ghost" type="button" data-action="skip" data-id="${task.id}">Skip</button>
          <button class="ghost" type="button" data-action="edit" data-id="${task.id}">Edit</button>
          <button class="ghost" type="button" data-action="reroll">Pick another</button>
        </div>
      </div>
    </article>`;
}

function taskTags(task) {
  const tags = [
    ...task.lifeAreas,
    ...task.energy.map((item) => `${item} energy`),
    ...task.times,
    ...task.moods.slice(0, 3)
  ];
  return tags.slice(0, 10).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`);
}

function completeTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  const at = nowIso();
  task.completedCount = (task.completedCount || 0) + 1;
  task.lastCompletedAt = at;
  task.updatedAt = at;
  history.unshift({ id: makeId('history'), taskId: id, title: task.title, action: 'completed', at });
  history = history.slice(0, 250);
  saveState();
  toast('Marked complete');
  renderTaskList();
  renderHistory();
  generateTask();
}

function skipTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  const at = nowIso();
  task.skippedCount = (task.skippedCount || 0) + 1;
  task.lastSkippedAt = at;
  task.updatedAt = at;
  history.unshift({ id: makeId('history'), taskId: id, title: task.title, action: 'skipped', at });
  history = history.slice(0, 250);
  saveState();
  toast('Skipped for now');
  renderTaskList();
  renderHistory();
  generateTask();
}

function resetForm() {
  $('#taskId').value = '';
  $('#taskTitle').value = '';
  $('#taskDuration').value = '5';
  $('#taskDifficulty').value = 'Easy';
  $('#taskLocation').value = '';
  $('#taskType').value = 'Care';
  $('#taskRepeatable').checked = true;
  $('#taskNotes').value = '';
  setCheckedValues('lifeAreas', []);
  setCheckedValues('energy', []);
  setCheckedValues('times', []);
  setCheckedValues('moods', []);
  $('#saveTaskButton').textContent = 'Save task';
  $('#cancelEditButton').classList.add('hidden');
}

function editTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  $('#taskId').value = task.id;
  $('#taskTitle').value = task.title;
  $('#taskDuration').value = String(task.duration);
  $('#taskDifficulty').value = task.difficulty;
  $('#taskLocation').value = task.location;
  $('#taskType').value = task.type;
  $('#taskRepeatable').checked = task.repeatable;
  $('#taskNotes').value = task.notes;
  setCheckedValues('lifeAreas', task.lifeAreas);
  setCheckedValues('energy', task.energy);
  setCheckedValues('times', task.times);
  setCheckedValues('moods', task.moods);
  $('#saveTaskButton').textContent = 'Update task';
  $('#cancelEditButton').classList.remove('hidden');
  switchScreen('add');
}

function validateTaskForm(task) {
  if (!task.title.trim()) return 'Add a task name.';
  if (task.lifeAreas.length === 0) return 'Choose at least one life area.';
  if (task.energy.length === 0) return 'Choose at least one energy level.';
  if (task.times.length === 0) return 'Choose at least one time of day.';
  if (task.moods.length === 0) return 'Choose at least one mood.';
  return '';
}

function saveTaskFromForm(event) {
  event.preventDefault();
  const id = $('#taskId').value;
  const existing = tasks.find((item) => item.id === id);
  const task = normalizeTask({
    ...(existing || {}),
    id: id || makeId('task'),
    title: $('#taskTitle').value.trim(),
    lifeAreas: getCheckedValues('lifeAreas'),
    energy: getCheckedValues('energy'),
    times: getCheckedValues('times'),
    moods: getCheckedValues('moods'),
    duration: Number($('#taskDuration').value),
    difficulty: $('#taskDifficulty').value,
    location: $('#taskLocation').value.trim() || 'Anywhere',
    type: $('#taskType').value,
    repeatable: $('#taskRepeatable').checked,
    notes: $('#taskNotes').value.trim(),
    createdAt: existing?.createdAt || nowIso(),
    updatedAt: nowIso()
  });

  const error = validateTaskForm(task);
  if (error) {
    toast(error);
    return;
  }

  if (existing) {
    tasks = tasks.map((item) => (item.id === id ? task : item));
    toast('Task updated');
  } else {
    tasks.unshift(task);
    toast('Task saved');
  }
  saveState();
  resetForm();
  renderTaskList();
  switchScreen('library');
}

function deleteTask(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return;
  const ok = window.confirm(`Delete “${task.title}”?`);
  if (!ok) return;
  tasks = tasks.filter((item) => item.id !== id);
  saveState();
  toast('Task deleted');
  renderTaskList();
  if (currentGeneratedTaskId === id) $('#generatedTask').innerHTML = '';
}

function renderTaskList() {
  const search = $('#librarySearch').value.trim().toLowerCase();
  const lifeArea = $('#libraryLifeArea').value;
  const energy = $('#libraryEnergy').value;
  const time = $('#libraryTime').value;

  const filtered = tasks.filter((task) => {
    const haystack = [task.title, task.notes, task.type, task.location, task.difficulty, ...task.lifeAreas, ...task.energy, ...task.times, ...task.moods]
      .join(' ')
      .toLowerCase();
    return (!search || haystack.includes(search))
      && fieldMatches(task.lifeAreas, lifeArea)
      && fieldMatches(task.energy, energy)
      && fieldMatches(task.times, time);
  });

  if (filtered.length === 0) {
    $('#taskList').innerHTML = `<div class="card empty-state"><h3>No tasks match this view</h3><p>Clear filters or add a new task.</p></div>`;
    return;
  }

  $('#taskList').innerHTML = filtered.map((task) => `
    <article class="library-item">
      <h3>${escapeHtml(task.title)}</h3>
      <div class="tag-row">${taskTags(task).join('')}</div>
      ${task.notes ? `<p class="notes">${escapeHtml(task.notes)}</p>` : ''}
      <p class="meta-line">${task.duration} min · ${escapeHtml(task.difficulty)} · ${escapeHtml(task.location)} · ${escapeHtml(task.type)}</p>
      <p class="meta-line">Completed ${task.completedCount || 0} · Skipped ${task.skippedCount || 0} · Last done: ${escapeHtml(formatDateTime(task.lastCompletedAt))}</p>
      <div class="button-row">
        <button class="primary" type="button" data-action="complete" data-id="${task.id}">Complete</button>
        <button class="ghost" type="button" data-action="edit" data-id="${task.id}">Edit</button>
        <button class="danger ghost" type="button" data-action="delete" data-id="${task.id}">Delete</button>
      </div>
    </article>
  `).join('');
}

function renderHistory() {
  const completed = history.filter((item) => item.action === 'completed').length;
  const skipped = history.filter((item) => item.action === 'skipped').length;
  const uniqueCompleted = new Set(history.filter((item) => item.action === 'completed').map((item) => item.taskId)).size;

  $('#statsGrid').innerHTML = `
    <div class="stat"><strong>${completed}</strong><span>Completed</span></div>
    <div class="stat"><strong>${skipped}</strong><span>Skipped</span></div>
    <div class="stat"><strong>${uniqueCompleted}</strong><span>Unique wins</span></div>
  `;

  if (history.length === 0) {
    $('#historyList').innerHTML = `<div class="card empty-state"><h3>No history yet</h3><p>Complete or skip a generated task to start building history.</p></div>`;
    return;
  }

  $('#historyList').innerHTML = history.slice(0, 80).map((item) => `
    <article class="history-item">
      <h3>${escapeHtml(item.title)}</h3>
      <p class="meta-line">${item.action === 'completed' ? 'Completed' : 'Skipped'} · ${escapeHtml(formatDateTime(item.at))}</p>
      <div class="button-row">
        ${tasks.some((task) => task.id === item.taskId) ? `<button class="ghost" type="button" data-action="edit" data-id="${item.taskId}">Edit task</button>` : ''}
      </div>
    </article>
  `).join('');
}

function clearHistory() {
  const ok = window.confirm('Clear your task history? Your tasks will stay saved.');
  if (!ok) return;
  history = [];
  tasks = tasks.map((task) => ({ ...task, lastCompletedAt: null, lastSkippedAt: null, completedCount: 0, skippedCount: 0 }));
  saveState();
  renderHistory();
  renderTaskList();
  toast('History cleared');
}

function addStarterTasks() {
  const existingTitles = new Set(tasks.map((task) => task.title.toLowerCase()));
  const newTasks = starterTasksWithIds().filter((task) => !existingTitles.has(task.title.toLowerCase()));
  if (newTasks.length === 0) {
    toast('Starter tasks are already in your library');
    return;
  }
  tasks = [...newTasks, ...tasks];
  saveState();
  renderTaskList();
  toast(`Added ${newTasks.length} starter tasks`);
}

function exportBackup() {
  const backup = {
    app: 'MoodTask',
    version: 1,
    exportedAt: nowIso(),
    tasks,
    history
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `moodtask-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  toast('Backup exported');
}

function importBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data.tasks)) throw new Error('Missing tasks');
      tasks = data.tasks.map(normalizeTask);
      history = Array.isArray(data.history) ? data.history : [];
      saveState();
      renderTaskList();
      renderHistory();
      toast('Backup imported');
    } catch {
      toast('Could not import that backup file');
    }
  };
  reader.readAsText(file);
}

function clearPrefs() {
  $('#prefLifeArea').value = 'Any';
  $('#prefEnergy').value = 'Any';
  $('#prefTime').value = 'Any';
  $('#prefMood').value = 'Any';
  $('#prefDuration').value = 'Any';
  $('#prefAvoidRecent').checked = true;
  readPrefsFromForm();
  $('#generatedTask').innerHTML = '';
  toast('Preferences cleared');
}

function initInstallPrompt() {
  const button = $('#installButton');
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    button.classList.remove('hidden');
  });

  button.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    button.classList.add('hidden');
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      // The app still works without offline caching.
    });
  }
}

function initOptions() {
  fillSelect($('#prefLifeArea'), OPTIONS.lifeAreas, true, 'Any life area');
  fillSelect($('#prefEnergy'), OPTIONS.energies, true, 'Any energy');
  fillSelect($('#prefTime'), OPTIONS.times, true, 'Any time');
  fillSelect($('#prefMood'), OPTIONS.moods, true, 'Any mood');

  fillSelect($('#libraryLifeArea'), OPTIONS.lifeAreas, true, 'All life areas');
  fillSelect($('#libraryEnergy'), OPTIONS.energies, true, 'All energy');
  fillSelect($('#libraryTime'), OPTIONS.times, true, 'All times');

  fillSelect($('#taskDifficulty'), OPTIONS.difficulties, false);
  fillSelect($('#taskType'), OPTIONS.types, false);

  createChipGroup($('#lifeAreaChips'), 'lifeAreas', OPTIONS.lifeAreas);
  createChipGroup($('#energyChips'), 'energy', OPTIONS.energies);
  createChipGroup($('#timeChips'), 'times', OPTIONS.times);
  createChipGroup($('#moodChips'), 'moods', OPTIONS.moods);
}

function bindEvents() {
  $$('.nav-button').forEach((button) => {
    button.addEventListener('click', () => switchScreen(button.dataset.screen));
  });

  $('#generatorForm').addEventListener('submit', (event) => {
    event.preventDefault();
    generateTask();
  });

  $('#clearPrefsButton').addEventListener('click', clearPrefs);
  $('#taskForm').addEventListener('submit', saveTaskFromForm);
  $('#cancelEditButton').addEventListener('click', () => {
    resetForm();
    toast('Edit canceled');
  });

  ['librarySearch', 'libraryLifeArea', 'libraryEnergy', 'libraryTime'].forEach((id) => {
    $(`#${id}`).addEventListener('input', renderTaskList);
    $(`#${id}`).addEventListener('change', renderTaskList);
  });

  $('#seedButton').addEventListener('click', addStarterTasks);
  $('#exportButton').addEventListener('click', exportBackup);
  $('#importInput').addEventListener('change', (event) => importBackup(event.target.files[0]));
  $('#clearHistoryButton').addEventListener('click', clearHistory);

  document.body.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const { action, id } = button.dataset;
    if (!action) return;
    if (action === 'complete') completeTask(id);
    if (action === 'skip') skipTask(id);
    if (action === 'edit') editTask(id);
    if (action === 'delete') deleteTask(id);
    if (action === 'reroll') generateTask();
    if (action === 'go-add') switchScreen('add');
  });
}

function init() {
  loadState();
  initOptions();
  restorePrefs();
  resetForm();
  bindEvents();
  renderTaskList();
  renderHistory();
  initInstallPrompt();
  registerServiceWorker();
}

document.addEventListener('DOMContentLoaded', init);
