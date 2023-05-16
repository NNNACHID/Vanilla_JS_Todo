// SELECTORS
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// LISTENERS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", checkTodo);

// FUNCTIONS 
function addTodo(event){

    event.preventDefault();

    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the <li>
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo__item");
    todoDiv.appendChild(newTodo);

    //Check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete__btn");
    todoDiv.appendChild(completedButton);

    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete__btn");
    todoDiv.appendChild(deleteButton);

    // Add to list
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteTodo(event){
    const item = event.target;
    
    //DELETE TODO
    if(item.classList[0] === "delete__btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        })
    }
}

function checkTodo(event){
    const item = event.target;
    
    //CHECK TODO
    if(item.classList[0] === "complete__btn"){
        const todo = item.parentElement;
        todo.classList.toggle("is__completed");
    }
}