(function () { 

     const item = document.querySelector('.item');
     const modal = document.querySelector('.modal');
     const dimmer = document.querySelector('.dimmer');

 item.addEventListener('click', function() {
    dimmer.classList.add('active');
});
    


      window.app.renderCompletedList = renderCompletedList;
    window.app.addCompletedTask = addCompletedTask;
    window.app.getCompletedTask = getCompletedTask;
    
})();