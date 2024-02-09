let CustomButton = document.getElementById("customButton");
function applyButtonFunction(){
    let BackgroundColorInput =  document.getElementById("bgColorInput").value;
    let FontColorInput = document.getElementById("fontColorInput").value;
    let FontSizeInput = document.getElementById("fontSizeInput").value;
    let FontWeightInput = document.getElementById("fontWeightInput").value;
    let PaddingInput = document.getElementById("paddingInput").value;
    let BorderRadiusInput = document.getElementById("borderRadiusInput").value;
    let BorderWidthInput = document.getElementById("borderWidthInput").value;
    CustomButton.style.backgroundColor = BackgroundColorInput;
    CustomButton.style.color = FontColorInput;
    CustomButton.style.fontSize = FontSizeInput;
    CustomButton.style.fontWeight = FontWeightInput;
    CustomButton.style.padding = PaddingInput;
    CustomButton.style.borderRadius = BorderRadiusInput;
    CustomButton.style.borderWidth = BorderWidthInput;
}
applyButtonFunction()
