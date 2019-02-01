(function () { 
	let data = JSON.parse(localStorage.getItem('completed-tasks')) || [];;

	const btn = document.querySelector('.hidden');
	const listCompleted = document.querySelector('.completed-task-list');
	let isActive = false;

	function buttonShow() {
		btn.classList.remove('hidden');
		btn.className = 'ui button blue tiny show-todo-btn-js';
	}
	function buttonHide() {
		btn.classList.add('hidden');

	}

	btn.addEventListener('click', function (event) {
		if(isActive) { 
			btn.innerText = 'Скрыть незавершенные задачи';
			isActive = false;
		} else {
			btn.innerText = 'Показать незавершенные задачи';
			isActive = true;
		}
		listCompleted.classList.toggle('hidden');
	});
  
function getCompletedTask() {
       return data;
       app.buttonHidden();
    }
		if (data.length > 0){
    	buttonShow();
    }

    window.app.buttonHide = buttonHide;
    window.app.getCompletedTask = getCompletedTask;
    window.app.buttonShow = buttonShow;
	
 console.log(data.length );
})();