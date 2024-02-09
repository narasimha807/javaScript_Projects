let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];
let BgContainer = document.getElementById("bgContainer");
let lengthofcolors = bgColorsArray.length;
let RandomNumbers = Math.ceil(Math.random() * lengthofcolors);

function ButtonClickingFunction(){
    let RandomNumbers = Math.ceil(Math.random() * lengthofcolors);

    if (RandomNumbers == lengthofcolors){
        RandomNumbers = lengthofcolors-1;
    }

    let randomBgColor = bgColorsArray[RandomNumbers];
    BgContainer.style.backgroundColor = randomBgColor;
}
