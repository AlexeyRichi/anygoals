(function () {  

    let data = JSON.parse(localStorage.getItem('tasks')) || [];

    const modal = document.querySelector('.modal');
    const dimmer = document.querySelector('.dimmer');
    const buttonClose = document.querySelector('.close-task-js');
    const buttonCloseSmall = document.querySelector('.close');
      
      app.renderList();

    function showModal() {
        dimmer.classList.add('active');
        modal.classList.add('active');
    }

    function hideModal() {
        dimmer.classList.remove('active');
        modal.classList.remove('active');
    };

    function openModal(data) {

   // dimmer.addEventListener('click', hideModal);
   buttonClose.addEventListener('click', hideModal);
   buttonCloseSmall.addEventListener('click', hideModal);
   modal.removeEventListener("click", hideModal);
   /// editing
   const titleEdit = document.querySelector('.title-edit');
   const label = document.querySelector('label'); 
   titleEdit.innerText = data.title;

    const description = document.querySelector('.description-task');
    localStorage.setItem('title', titleEdit.value);
    localStorage.setItem('description', description.value);

        showModal();
    }

    function attachModalHandler(item, data) {
       item.addEventListener('click', openModal.bind(null, data));

        ///
    }
    
window.app.attachModalHandler = attachModalHandler;
window.app.openModal = openModal;

})();
