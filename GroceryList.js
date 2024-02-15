let createContainer = document.createElement("div");
createContainer.classList.add("bg-container");
document.body.appendChild(createContainer);

let h1Element = document.createElement("h1");
h1Element.textContent = "Grocery List";
h1Element.classList.add("heading");
createContainer.appendChild(h1Element);

let unoderLi = document.createElement("ul");
unoderLi.classList.add("list-container");
createContainer.appendChild(unoderLi);

let ProductArray = ['Milk', 'Peanut Butter', 'Peanut Butter', 'Tomato sauce', 'Cup Cakes','Noodies' ]

for (let products of ProductArray){
  let listElement = document.createElement("li");
  listElement.textContent = products;
  unoderLi.appendChild(listElement);
}

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "MyCheckBox";
createContainer.appendChild(inputElement);

let LabelElement = document.createElement("label");
LabelElement.textContent = "Need Home Delivery";
LabelElement.classList.add("delivery-checkbox");
LabelElement.setAttribute("for", "MyCheckBox")
createContainer.appendChild(LabelElement);

let breakline = document.createElement("br");
createContainer.appendChild(breakline);

let buttonElement = document.createElement("button");
buttonElement.textContent = "Proceed to Pay";
buttonElement.classList.add("button-style")
createContainer.appendChild(buttonElement);


