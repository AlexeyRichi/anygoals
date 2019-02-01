(function () {  
    window.app = {};
    const modal = document.querySelector('.modal');
    const dimmer = document.querySelector('.dimmer');
    const buttonClose = document.querySelector('.close-task-js');
    const buttonCloseSmall = document.querySelector('.close');
    let currentIndex = null;
    let currentData = null;

    function showModal() {
      dimmer.classList.add('active');
      modal.classList.add('active');
    }

    function hideModal() {
      dimmer.classList.remove('active');
      modal.classList.remove('active');
    };
    
    function openModal(data, index) {

      buttonCloseSmall.addEventListener('click', hideModal);
      modal.removeEventListener("click", hideModal);

      const titleEdit = document.querySelector('.title-edit');
      const label = document.querySelector('label'); 
      titleEdit.innerText = data.title;

      const description = document.querySelector('.description-task');
      description.innerText = data.description ? data.description :'';

      currentIndex = index;
      currentData = data;
      showModal();
    }

    function attachModalCloseTaskHandler() {
      buttonClose.addEventListener('click', () => {
      app.removeTaskFromDate(currentIndex);
      hideModal();
      });
    }
    
    function attachModalHandler(item, data, index) {
      item.addEventListener('click', openModal.bind(null, data, index));
    }
    
    function attachTitleKeyUp() {
      const titleEdit = document.querySelector('.title-edit');
      titleEdit.addEventListener('keyup', function(e) {
      const value = e.target.value;
      currentData.title = value;
      app.updateIndexItemList(currentData, currentIndex);
      })
    }

    function attachDescriptionKeyUp() {
      const description = document.querySelector('.description-task');
      description.addEventListener('keyup', function(e) {
      const value = e.target.value;
      currentData.description = value;
      app.updateIndexItemList(currentData, currentIndex);
      })
    }

  attachTitleKeyUp();
  attachDescriptionKeyUp();
  attachModalCloseTaskHandler();

  window.app.attachModalHandler = attachModalHandler;
  window.app.openModal = openModal;

})();
