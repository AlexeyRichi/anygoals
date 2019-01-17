(function () { 
      let data = [];
      
     function attachEditHandler(elem, index) {
        elem.addEventListener('click', removeTask.bind(null, elem, index));

     const item = document.querySelector('.item');
     const modal = document.querySelector('.modal');
     const dimmer = document.querySelector('.dimmer');
     const buttonClose = document.querySelector('.close-task-js');



item.addEventListener('click', function() {
    dimmer.classList.add('active');
    modal.classList.add('active');
    removeClickHandler();
});

dimmer.addEventListener('click', function() {
    dimmer.classList.remove('active');
    modal.classList.remove('active');
});
buttonClose.addEventListener('click', function() {
    dimmer.classList.remove('active');
    modal.classList.remove('active');
});
    

function removeClickHandler (modal) {
  // remove click handler from self
  modal.writeAttribute('onclick', null);
}

   
    }

    function removeTask(elem, index) {
        elem.removeEventListener('click', removeTask);

        app.addCompletedTask(data[index]);
        app.renderCompletedList();

        data.splice(index, index + 1);
        renderList();
    }

  

})();