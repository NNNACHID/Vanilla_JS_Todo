// SELECTORS
const todoInput = document.querySelector(".todo__input");
const todoButton = document.querySelector(".todo__button");
const todoList = document.querySelector(".todo__list");
const filterOption = document.querySelector(".todo__filter");

// LISTENERS
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", checkTodo);
filterOption.addEventListener("input", filterTodo);


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
    
    // Add the todo to the locale storage
    saveToLocal(todoInput.value);

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
        removeLocalTodos(todo);
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

function filterTodo(event){
    const todos = Array.from(todoList.childNodes).filter(function(node) {
        return node.nodeType === Node.ELEMENT_NODE;
    });

    todos.forEach(function(todo){
        
        switch(event.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("is__completed")){
                    todo.style.display = "flex";
                }else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("is__completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
    
}

function saveToLocal(todo){
    // CHECK IF THERE ARE EXISTING ITEMS
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    
    todos.forEach(function(todo){
        // Todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        // Create the <li>
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
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
    });
}

function removeLocalTodos(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}