let imageElement = document.getElementById("image");
let Warningmessage = document.getElementById("warningMessage");
let DecrementImageSize = document.getElementById("decrementButton");
let IncrementImageSize = document.getElementById("incrementButton");
let ImageWidth = document.getElementById("imageWidth");

let defaultImageWidth = 200;
let maximagewidth = 300;
let minimagewidth = 100;
let maximagewarningmessage = "Too Big. Decrease of the image size";
let minimagewarningmessage = "Can't Visible. Increase of the image size";

imageElement.style.width = defaultImageWidth + "px";
ImageWidth.textContent = defaultImageWidth + "px"

function onIncrement() {
  if (defaultImageWidth >= maximagewidth) {
    Warningmessage.textContent = maximagewarningmessage ;
  }
  else {
    defaultImageWidth = defaultImageWidth + 5;
    let updatedImageWidth = defaultImageWidth + "px";

    Warningmessage.textContent = "";
    imageElement.style.width = updatedImageWidth;
    ImageWidth.textContent = updatedImageWidth;
  }
}



function onDecrement(){
    if (defaultImageWidth <= minimagewidth) {
    Warningmessage.textContent = minimagewarningmessage;
  }
  else {
    defaultImageWidth = defaultImageWidth - 5;
    let updatedImageWidth = defaultImageWidth + "px";

    Warningmessage.textContent = "";
    imageElement.style.width = updatedImageWidth;
    ImageWidth.textContent = updatedImageWidth;
  }

}
