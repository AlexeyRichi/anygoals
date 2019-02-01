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
          
            app.attachModalHandler(item, data[index], index);

            list.appendChild(item);  // add element into html
        
        });
    }

    function attachEditHandler(elem, index) {
        elem.addEventListener('click', moveToCompletedTask.bind(null, elem, index), true);

    }

    function moveToCompletedTask(elem, index, event) {
        elem.removeEventListener('click', moveToCompletedTask);
        app.addCompletedTask(data[index]);
        app.renderCompletedList();
        app.buttonShow();
        removeTaskFromDate(index);
        event.stopImmediatePropagation();
    }

    function addTask(task) {
        data.push(task);
        updateDataList(data);
    }
   
    function updateDataList(data) {
        localStorage.setItem('tasks', JSON.stringify(data));
    }
    function updateIndexItemList(item, index) {
        data[index] = item;
        updateDataList(data);
    }

    function removeTaskFromDate(index){
        data.splice(index, 1);
        updateDataList(data);
        renderList();
    }
    renderList();
    
    window.app.renderList = renderList;
    window.app.addTask = addTask;
    window.app.moveToCompletedTask = moveToCompletedTask;
    window.app.updateDataList = updateDataList;
    window.app.updateIndexItemList = updateIndexItemList;
    window.app.removeTaskFromDate = removeTaskFromDate;
})();