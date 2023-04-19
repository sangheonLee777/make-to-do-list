const todoList = document.querySelector('.todo-list')
const todoInput = document.querySelector(".todo-input");

const createTodo = function() {
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    
    newBtn.addEventListener('click',()=>{
      newLi.classList.toggle('complete')
    });

    newSpan.innerText = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    todoList.appendChild(newLi);
    todoInput.value = "";
}

const keyCodeCheck = function() {
  if(window.event.keyCode === 13 && todoInput.value!=='') {
    createTodo()
  }
  
}