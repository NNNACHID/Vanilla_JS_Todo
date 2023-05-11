// SELECTORS
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");

// LISTENERS
todoButton.addEventListener("click", addTodo);

// FUNCTIONS 
function addTodo(event){

    event.preventDefault();

    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create the <li>
    const newTodo = document.createElement("li");
    newTodo.innerText = "Hey";
    newTodo.classList.add("todo__item");
    todoDiv.appendChild(newTodo);

    //Check button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '';
    completedButton.classList.add("complete__btn");
    todoDiv.appendChild(completedButton);

    // //Delete button
    // const deleteButton = document.createElement("button");
    // completedButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    // completedButton.classList.add("delete__btn");
    // todoDiv.appendChild(deleteButton);

    // Add to list
    todoList.appendChild(todoDiv);
}