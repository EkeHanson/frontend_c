// ============================================================
// SIMPLE TODO APP
// Concepts: Arrays, Objects, DOM, Loops, String Methods
// ============================================================

// --- ARRAY of OBJECTS ---
let todos = [];
let idCounter = 1;

// --- DOM References ---
const todoList = document.getElementById('todoList');
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const totalCount = document.getElementById('totalCount');
const doneCount = document.getElementById('doneCount');
const pendingCount = document.getElementById('pendingCount');

// --- FUNCTIONS ---

// String Methods: trim(), toLowerCase()
function cleanText(text) {
    return text.trim();
}

// Create a new todo (OBJECT)
function createTodo(text) {
    // String Methods: trim()
    const clean = cleanText(text);
    if (clean === '') {
        alert('Please enter a task!');
        return null;
    }

    // Create OBJECT
    const todo = {
        id: idCounter++,
        text: clean,
        completed: false
    };

    // Array Method: push()
    todos.push(todo);
    return todo;
}

// Toggle completed status
function toggleTodo(id) {
    // Array Method: find()
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        render();
    }
}

// Delete a todo
function deleteTodo(id) {
    // Array Method: filter()
    todos = todos.filter(t => t.id !== id);
    render();
}

// --- RENDER ---

function render() {
    // Update stats using Array Methods: filter(), length
    const total = todos.length;
    const done = todos.filter(t => t.completed).length;
    const pending = total - done;

    totalCount.textContent = total;
    doneCount.textContent = done;
    pendingCount.textContent = pending;

    // Clear list
    todoList.innerHTML = '';

    // Empty state
    if (todos.length === 0) {
        todoList.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-clipboard-list"></i>
                <p>No tasks yet. Add one above!</p>
            </div>
        `;
        return;
    }

    // LOOP through todos (for...of)
    for (const todo of todos) {
        const li = document.createElement('li');
        li.className = `todo-item${todo.completed ? ' completed' : ''}`;

        // Checkbox
        const checkbox = document.createElement('div');
        checkbox.className = `checkbox${todo.completed ? ' checked' : ''}`;
        checkbox.innerHTML = todo.completed ? '<i class="fas fa-check"></i>' : '';
        checkbox.addEventListener('click', () => toggleTodo(todo.id));

        // Text
        const textSpan = document.createElement('span');
        textSpan.className = 'todo-text';
        textSpan.textContent = todo.text;

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.addEventListener('click', () => deleteTodo(todo.id));

        // Assemble
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }
}

// --- Add Todo ---

function addTodo() {
    const text = todoInput.value;
    const todo = createTodo(text);
    if (todo) {
        todoInput.value = '';
        todoInput.focus();
        render();
    }
}

// --- Event Listeners ---

addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodo();
    }
});

// --- Initialize with sample data ---

function initSampleTodos() {
    const sampleTasks = [
        'Learn JavaScript Arrays',
        'Practice Objects',
        'Build a Todo App',
        'Master DOM Manipulation',
        'Study String Methods'
    ];

    // LOOP: for...of with String Methods: slice()
    for (const task of sampleTasks) {
        // String Methods: slice() to get first letter uppercase
        const formatted = task.charAt(0).toUpperCase() + task.slice(1);
        const todo = {
            id: idCounter++,
            text: formatted,
            completed: false
        };
        todos.push(todo);
    }

    render();
}

initSampleTodos();

// --- Console Demos ---

console.log('📚 Simple Todo App');
console.log('📦 Arrays:', todos);
console.log('📦 Objects:', todos[0]);
console.log('📝 String Methods used: trim(), toLowerCase(), charAt(), slice()');
console.log('🔄 Loops: for...of');
console.log('🎯 DOM: createElement, appendChild, event listeners');
console.log('✅ App ready!');