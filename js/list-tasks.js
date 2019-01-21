(function () { 
    let data = JSON.parse(localStorage.getItem('tasks')) || [];
    const list = document.querySelector('.task-list-js');


    function renderList() {
        list.innerHTML = '';

        data.forEach(({ title }, index) => {
            const item = document.createElement('div'); // create element
            item.className = 'item'; // add class for element

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
            label.innerText = title;

            attachEditHandler(checkbox, index);
          
            app.attachModalHandler(item, data[index]);

            list.appendChild(item);  // add element into html
          
        });
    }
      function removeChild() {
       const item = document.querySelector('.item');
       const list = document.querySelector('.task-list-js');
       list.removeChild(item);
       localStorage.removeItem('task');
    }

    function attachEditHandler(elem, index) {
        elem.addEventListener('click', removeTask.bind(null, elem, index), true);
    }

    function removeTask(elem, index, event) {
        elem.removeEventListener('click', removeTask);
        
        app.addCompletedTask(data[index]);
        app.renderCompletedList();
        app.buttonShow();
        data.splice(index, index + 1);
        renderList();
        event.stopImmediatePropagation();
    }

    function addTask(task) {
        data.push(task);
        localStorage.setItem('tasks', JSON.stringify(data));
    }

    renderList();
 
    window.app.renderList = renderList;
    window.app.addTask = addTask;
    window.app.removeTask = removeTask;
    window.app.removeChild = removeChild;
})();