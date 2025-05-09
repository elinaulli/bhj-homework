const form = document.forms[0]; //первая форма в документе
const tasksInput = document.getElementById('task__input');
const btnAdd = document.querySelector('.tasks__add');
const tasksList = document.getElementById('tasks__list');

function createTask(title) {
	//создаем элемент
	let newTask = document.createElement('div');
	newTask.classList.add('task');
	newTask.innerHTML = '<div class="task__title"></div><a href="#" class="task__remove">&times;</a>';
	newTasksTitle = newTask.querySelector('.task__title');
	newTasksTitle.innerHTML = title;

	//обработчик кнопки

	const removeButton = newTask.querySelector('.task__remove');
	removeButton.addEventListener('click', (event) => {
		event.preventDefault();
		tasksList.removeChild(newTask);
	});

	tasksList.append(newTask);

}

form.addEventListener('submit', event => {
	event.preventDefault(); // для формы

	const taskTitle = tasksInput.value.trim(); // значение поля без пробелом
	if (taskTitle) {
		createTask(taskTitle);
		form.reset(); //сброс формы
	}
});

tasksInput.addEventListener('keypress', event => {
	if (event.key === 'Enter') {
		event.preventDefault(); // Предотвращаем отправку формы
		const taskTitle = tasksInput.value.trim(); // значение поля без пробелом
		if (taskTitle) {
			createTask(taskTitle);
			form.reset(); //сброс формы
		}
	}
});