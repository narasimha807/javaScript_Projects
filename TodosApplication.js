let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "myCheckBox";
document.body.appendChild(inputElement);

let labelElment = document.createElement("label");
labelElment.setAttribute("for", 'myCheckBox');
labelElment.textContent = " Gradutaed";

document.body.appendChild(labelElment)
