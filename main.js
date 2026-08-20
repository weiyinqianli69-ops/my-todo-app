document.getElementById('add-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);

    input.value = '';
});