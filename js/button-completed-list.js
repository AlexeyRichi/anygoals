(function () { 
	let data = [];

	const btn = document.querySelector('.hidden');
	const listCompleted = document.querySelector('.completed-task-list');
	let isActive = false;

	function buttonShow() {
		btn.classList.remove('hidden');
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
		
		listCompleted.classList.toggle('hidden');
	});
  
function getCompletedTask() {
       return data;
    }

    window.app.getCompletedTask = getCompletedTask;
    window.app.buttonShow = buttonShow;
	
 console.log(data.length );
})();