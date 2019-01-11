

(function () { 
	const text = document.querySelector('.input-add-task-js');
	const btn = document.querySelector('.add-btn-js');
	const list = document.querySelector('.task-list-js');

   	btn.addEventListener('click', function check() { // валидация на заполненность
	   if (text.value.trim().length === 0) {
	        alert('Поле не может быть пустым');
	        return;
	    }

	    if (text.value.trim().length > 10) {
	        alert('Введите не более 10 символов');
	        return false;
	    }

		addTask();
	});


	function addTask() {
		const item = document.createElement('div'); // создаём элемент
		item.className = 'item'; //присваиваем элементу нужный класс
		list.appendChild(item);  //выводим элемент в список

		const content = document.createElement('div');  //создаём элемент
		content.className = 'content'; //присваиваем элементу нужный класс
		item.appendChild(content);  //выводим элемент в список

		const checkbox = document.createElement('div');  //создаём элемент
		checkbox.className = 'checkbox'; //присваиваем элементу нужный класс
		content.appendChild(checkbox);  //выводим элемент в список

		const input = document.createElement('input'); 
		input.type = 'checkbox'; 
		checkbox.appendChild(input);  

		const label = document.createElement('label'); 
		checkbox.appendChild(label);  
		label.innerText = text.value; //через инспектор есть значение инпута, но на экран не выводится почему-то
	};

})();