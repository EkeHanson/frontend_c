(function() {
    "use strict";

    const taskList = document.getElementById('taskList');
    const totalSpan = document.getElementById('totalTasks');
    const doneSpan = document.getElementById('doneTasks');
    const pendingSpan = document.getElementById('pendingTasks');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const addBtn = document.getElementById('addTaskBtn');
    const newInput = document.getElementById('newTaskInput');

    // update stats with a human touch
    function updateStats() {
        const items = taskList.querySelectorAll('.task-item');
        const total = items.length;
        let done = 0;
        items.forEach(item => {
            const cb = item.querySelector('input[type="checkbox"]');
            if (cb && cb.checked) done++;
        });
        const pending = total - done;
        const pct = total === 0 ? 0 : Math.round((done / total) * 100);

        totalSpan.textContent = total;
        doneSpan.textContent = done;
        pendingSpan.textContent = pending;
        progressFill.style.width = pct + '%';
        progressPercent.textContent = pct + '%';

        // update footer message
        const footerMsg = document.querySelector('.panel-footer span:first-child');
        if (footerMsg) {
            const remain = pending;
            let mood = 'you\'ve got this';
            if (remain === 0 && total > 0) mood = 'all done! 🎉';
            else if (remain > 3) mood = 'take a breath, you can do it';
            else if (remain === 1) mood = 'almost there!';
            footerMsg.innerHTML = `<i class="fas fa-mug-hot"></i> ${mood}`;
        }
    }

    // escape
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // attach events to a task item
    function attachTaskEvents(taskItem) {
        const cb = taskItem.querySelector('input[type="checkbox"]');
        if (cb) {
            cb.addEventListener('change', function() {
                updateStats();
            });
        }

        const delBtn = taskItem.querySelector('.btn-delete');
        if (delBtn) {
            delBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                if (confirm('Delete this task?')) {
                    taskItem.remove();
                    updateStats();
                }
            });
        }

        const editBtn = taskItem.querySelector('.btn-edit');
        if (editBtn) {
            editBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const titleDiv = taskItem.querySelector('.task-title');
                let currentText = titleDiv ? titleDiv.textContent.replace(/high|medium|low|new/i, '').trim() : 'task';
                const newTitle = prompt('Edit task title:', currentText);
                if (newTitle !== null && newTitle.trim() !== '') {
                    if (titleDiv) {
                        const tagSpan = titleDiv.querySelector('.task-tag');
                        const tagHtml = tagSpan ? tagSpan.outerHTML : '';
                        titleDiv.innerHTML = escapeHtml(newTitle.trim()) + ' ' + tagHtml;
                    }
                    updateStats();
                }
            });
        }
    }

    // add new task
    function addNewTask(title) {
        if (!title.trim()) return false;

        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';
        taskDiv.dataset.id = Date.now();

        taskDiv.innerHTML = `
            <div class="task-check">
                <input type="checkbox" />
            </div>
            <div class="task-content">
                <div class="task-title">
                    ${escapeHtml(title.trim())}
                    <span class="task-tag new">new</span>
                </div>
                <div class="task-meta">
                    <span><i class="far fa-clock"></i> now</span>
                    <span><i class="far fa-calendar-alt"></i> today</span>
                </div>
            </div>
            <div class="task-actions">
                <button class="btn-edit" title="Edit"><i class="fas fa-pen"></i></button>
                <button class="btn-delete" title="Delete"><i class="fas fa-trash-can"></i></button>
            </div>
        `;

        taskList.appendChild(taskDiv);
        attachTaskEvents(taskDiv);
        updateStats();

        newInput.value = '';
        newInput.focus();
        return true;
    }

    // attach to existing tasks
    function attachExistingTasks() {
        const items = taskList.querySelectorAll('.task-item');
        items.forEach(item => attachTaskEvents(item));
    }

    // set current date
    function setDate() {
        const dateSpan = document.getElementById('currentDate');
        if (dateSpan) {
            const now = new Date();
            const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
            dateSpan.textContent = now.toLocaleDateString('en-US', options);
        }
    }

    // event listeners
    addBtn.addEventListener('click', function() {
        addNewTask(newInput.value);
    });

    newInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addNewTask(newInput.value);
        }
    });

    // init
    function init() {
        setDate();
        attachExistingTasks();
        updateStats();
    }

    init();
})();