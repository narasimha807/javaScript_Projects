let todoItemsContainer = document.getElementById("todoItemsContainer");

let todoArray = [
                {
                  text :"Learn HTML"
                },
                {
                  text :"Learn CSS"
                },
                {
                  text :"Learn JavaScript"
                },
                {
                  text : "Learn Node JS"
                },
                {
                  text : "Learn React JS"
                }
];

function createAndAppend(todo){
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = "MyCheckbox";
  inputElement.classList.add("checkbox-input");

  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", "MyCheckbox");
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;

  labelContainer.appendChild(labelElement)

  let DeleteiconContainer = document.createElement("div");
  DeleteiconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(DeleteiconContainer);

  let iconElement = document.createElement("i");
  iconElement.classList.add("far", "fa-trash-alt", "delete-icon");
  DeleteiconContainer.appendChild(iconElement);


}

for (let eachItem of todoArray){
  createAndAppend(eachItem);
}


