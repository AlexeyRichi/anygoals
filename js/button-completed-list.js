(function () { 
	let data = [];

	const btn = document.querySelector('.show-todo-btn-js');
	const listCompleted = document.querySelector('.completed-task-list');
	let isActive = false;

	if (data.length === 0 ){
		btn.className = 'd-none';
	}
	else {
		btn.className = 'ui button blue tiny show-todo-btn-js';
	}

	btn.addEventListener('click', function (event) {
		if(isActive) { // active

			btn.innerText = 'Скрыть незавершенные задачи';

			isActive = false;
		} else { // is not active
			btn.innerText = 'Показать незавершенные задачи';

			isActive = true;
		}
		
		listCompleted.classList.toggle('d-none');
	});
  

function getCompletedTask() {
       return data;
    }

    window.app.getCompletedTask = getCompletedTask;
	
 console.log(data.length );
})();