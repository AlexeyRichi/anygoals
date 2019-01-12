

(function () { 
	const text = document.querySelector('.input-add-task-js');
	const btn = document.querySelector('.add-btn-js');
	const list = document.querySelector('.task-list-js');

   	btn.addEventListener('click', function check() { // validation
	   if (text.value.trim().length === 0) {
	        alert('Поле не может быть пустым');
	        return;
	    }

	    if (text.value.trim().length > 50) { // validation
	        alert('Введите не более 50 символов');
	        return false;
	    }

		addTask();
	});


	function addTask() {
		const item = document.createElement('div'); // create element
		item.className = 'item'; // add class for element
		list.appendChild(item);  // add element into html

		const content = document.createElement('div');  
		content.className = 'content'; 
		item.appendChild(content);  

		const checkbox = document.createElement('div');  
		checkbox.className = 'checkbox ui'; 
		content.appendChild(checkbox);  
 		
		const input = document.createElement('input'); 
		input.type = 'checkbox'; 
		checkbox.appendChild(input);  

		const label = document.createElement('label'); 
		checkbox.appendChild(label);  
		label.innerText = text.value; 
	};

})();