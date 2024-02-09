function SwitchOff(){
  document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  document.getElementById("OnSwitch").style.backgroundColor = "#22c55e";
  document.getElementById("OffSwitch").style.backgroundColor = "#cbd2d9";
  document.getElementById("SwitchStatus").textContent = "Switched Off"
}
function SwitchOn(){
  document.getElementById("bulbImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  document.getElementById("catImage").src ="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  document.getElementById("OnSwitch").style.backgroundColor = "#cbd2d9";
  document.getElementById("OffSwitch").style.backgroundColor = "#e12d39";
  document.getElementById("SwitchStatus").textContent = "Switched On"
}
