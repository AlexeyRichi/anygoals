
(function () { 

	var text = document.querySelector('.input-add-task-js');
	var btn = document.querySelector('.add-btn-js');
	var list = document.querySelector('.task-list-js');
    


	btn.addEventListener('click', function() {  
	      console.log(text.value);       //проверка связи

	      var item = document.createElement('div');  //создаём элемент

	      item.className = 'item'; //присваиваем элементу нужный класс

	      list.appendChild(item);  //выводим элемент в список
	      
	      var content = document.createElement('div');  //создаём элемент
          content.className = 'content'; //присваиваем элементу нужный класс
          item.appendChild(content);  //выводим элемент в список

          var checkbox = document.createElement('div');  //создаём элемент
          checkbox.className = 'checkbox'; //присваиваем элементу нужный класс
          content.appendChild(checkbox);  //выводим элемент в список

          var input = document.createElement('input'); 
          input.type = 'checkbox'; 
          checkbox.appendChild(input);  

          var label = document.createElement('label'); 
          checkbox.appendChild(label);  
          label.innerText = text.value; //через инспектор есть значение инпута, но на экран не выводится почему-то

	});

	btn.addEventListener('click', function check(){ //валидация на заполненность
	   if (text.value == ''){
	        alert('Поле не может быть пустым');
	        return false;
	    }
	})
	btn.addEventListener('click', function checkLenght(){//валидация на длину строки, почему-то не работает :(
	   if (text.length > 10){
	        alert('Введите не более 10 символов');
	        return false;
	       }
	})

})();