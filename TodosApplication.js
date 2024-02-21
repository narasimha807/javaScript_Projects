let todoItemsContainer = document.getElementById("todoItemsContainer");
let AddingTodosButton = document.getElementById("AddingTodosButton");
let SaveTodoButton = document.getElementById("SaveTodoButton");


function GetTodoLocalStorage(){
  let stringifiedTodoList = localStorage.getItem("todoArray");
  let parsedTodoList = JSON.parse(stringifiedTodoList);
  if(parsedTodoList === null){
    return [];
  }
  else{
    return parsedTodoList;
  }
}

let todoArray = GetTodoLocalStorage();

SaveTodoButton.onclick = function(){
  localStorage.setItem("todoArray", JSON.stringify(todoArray));

}

let todosCount = todoArray.length;

function OnCheckkedChangedStatus(CheckBoxId, labelId){
  let checkboxElement = document.getElementById(CheckBoxId);
  let LabelElement = document.getElementById(labelId);

  LabelElement.classList.toggle("checked");

}

function onDeleteTodo(todoId){
  let TodoElement = document.getElementById(todoId);
  todoItemsContainer.removeChild(TodoElement);
}





function createAndAppend(todo){
  let todoId = "todo" + todo.UniqueNol;
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  todoElement.id = todoId;
  let inputElement = document.createElement("input");
  let CheckBoxId = "checkbox" + todo.UniqueNo;
  inputElement.type = "checkbox";
  inputElement.id = CheckBoxId;
  inputElement.onclick = function(){
    OnCheckkedChangedStatus(CheckBoxId, labelId);
  }
  inputElement.classList.add("checkbox-input");

  todoElement.appendChild(inputElement);


  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  let labelId = "label" + todo.UniqueNo;

  labelElement.setAttribute("for", CheckBoxId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelContainer.appendChild(labelElement)

  let DeleteiconContainer = document.createElement("div");
  DeleteiconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(DeleteiconContainer);

  let iconElement = document.createElement("i");
  iconElement.classList.add("far", "fa-trash-alt", "delete-icon");
  DeleteiconContainer.appendChild(iconElement);

  iconElement.onclick = function(){
    onDeleteTodo(todoId);
  };

}

function onAddTodo(){
  let userInputElement = document.getElementById("todoUserInput");
  let userInput = userInputElement.value;

  if(userInput === ""){
    alert("Enter Valid Input");
    return;
  }
  todosCount = todosCount + 1
  let newTodo = {
    text : userInput,
    UniqueNo : todosCount
  };
  todoArray.push(newTodo);

  createAndAppend(newTodo);
  userInputElement.value = "";

}
AddingTodosButton.onclick = function(){
  onAddTodo();
};

for (let eachItem of todoArray){
  createAndAppend(eachItem);
}

