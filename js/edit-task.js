

(function () { 
    const checkbox = document.querySelectorAll('.checkbox');
    const list = document.querySelector('.task-list-js');
    const listCompleted = document.querySelector('.completed-task-list');
    const item = document.querySelectorAll('.item');

    for (let i = 0; i < checkbox.length; i++) {
    let self = checkbox[i];

    self.addEventListener('click', function (event) {
        this.classList.add('checked'); 
         move(this);
         let check = document.getElementById('check');
         listCompleted.appendChild(check);
          
       });
    }
    function move(elem){
    	for(let i = 0; i < item.length; i++ ){
    	let a = item[i];
	      a.addEventListener('click', function (ev) {
          a.setAttribute('id', 'check');
	      });
        }
    }
    function moveBack(elem){
        for(let i = 0; i < item.length; i++ ){
        let a = item[i];
          a.addEventListener('click', function (ev) {
          a.removeAttribute('id', 'check');
           app.buttonHidden();
          });
        }
    }
   listCompleted.addEventListener('click', function (event) {
  
        for (let i = 0; i < checkbox.length; i++) {
         let self = checkbox[i];
        
         self.addEventListener('click', function (event) {
           this.classList.remove('checked');
           moveBack(this);
           list.appendChild(check);
        });
     }
    });
})();


   

