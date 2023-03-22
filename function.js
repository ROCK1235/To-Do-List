let taskInput = document.getElementById('task-input');
let taskList = document.getElementById('task-list');

function addTask() {
	let task = taskInput.value.trim();

	if (task === '') {
		return;
	}

	let li = document.createElement('li');
	let span = document.createElement('span');
	let button = document.createElement('button');

	span.innerText = task;
	button.innerText = 'Delete';

	button.addEventListener('click', function() {
		li.remove();
	});

	li.appendChild(span);
	li.appendChild(button);
	taskList.appendChild(li);

	taskInput.value = '';
}
