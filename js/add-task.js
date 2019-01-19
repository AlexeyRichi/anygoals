

(function () { 
	const text = document.querySelector('.input-add-task-js');
	const btn = document.querySelector('.add-btn-js');

   	btn.addEventListener('click', function check() { // 1. CONTROLLER
	   if (text.value.trim().length === 0) {
	        alert('Поле не может быть пустым');
	        return;
	    }

	    if (text.value.trim().length > 50) {
	        alert('Введите не более 50 символов');
	        return false;
	    }

		app.addTask({ // 2. MODEL
			title: text.value
		});

		app.renderList(); // 3. VIEW

		text.value = '';
	});

})();