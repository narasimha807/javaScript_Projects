let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
let clickCount = localStorage.getItem("clickCount");
if (clickCount === null){
  counterValue.textContent = "";

}
else{
  counterValue.textContent = clickCount;
}
incrementBtn.onclick = function() {
    let previousvalue = counterValue.textContent;
    let updatevalue = parseInt(previousvalue) + 1;

    localStorage.setItem("clickCount", updatevalue);
    counterValue.textContent = updatevalue;
}

