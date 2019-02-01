(function () { 
    let data = JSON.parse(localStorage.getItem('completed-tasks')) || [];
    const list = document.querySelector('.completed-task-list');

    function renderCompletedList() {
        list.innerHTML = '';

        data.forEach(({ title }, index) => {
            const item = document.createElement('div'); // create element
            item.className = 'item checked'; // add class for element

            const content = document.createElement('div');  
            content.className = 'content'; 
            item.appendChild(content);  
    
            const checkbox = document.createElement('div');  
            checkbox.className = 'checkbox ui checked'; 
            content.appendChild(checkbox);  
                
            const input = document.createElement('input'); 
            input.type = 'checkbox'; 
            input.checked = true;
            input.className = 'hidden'; 
            checkbox.appendChild(input);  
    
            const label = document.createElement('label'); 
            checkbox.appendChild(label);  
            label.innerText = title; 
            attachEditHandler(checkbox, index);

            list.appendChild(item);  // add element into html
         
        });
    }

    function attachEditHandler(elem, index) {
        elem.addEventListener('click', removeCompletedTask.bind(null, elem, index));
   
    }

    function removeCompletedTask(elem, index) {
        elem.removeEventListener('click', removeCompletedTask);

        app.addTask(data[index]);
        app.renderList();

        data.splice(index, index + 1);
        renderCompletedList();

        localStorage.setItem('completed-tasks', JSON.stringify(data));
    }
     
    function addCompletedTask(task) {
        data.push(task);
        localStorage.setItem('completed-tasks', JSON.stringify(data));
    }

    function getCompletedTask() {
       return data;
    }
    
    renderCompletedList();
  
    window.app.renderCompletedList = renderCompletedList;
    window.app.addCompletedTask = addCompletedTask;
    window.app.getCompletedTask = getCompletedTask;
})();