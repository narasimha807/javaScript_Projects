let AboutTab = document.getElementById("aboutTab");
let TimeToVisitTab = document.getElementById("timeToVisitTab");
let AttractionsTab = document.getElementById("attractionsTab");
let BgColorChangeaboutButton = document.getElementById("aboutButton");
let BgColorChangetimeToVisitButton = document.getElementById("timeToVisitButton");
let BgColorChangeattractionsButton = document.getElementById("attractionsButton");
TimeToVisitTab.classList.add("d-none");
AttractionsTab.classList.add("d-none");

function OnclickaboutButton() {
    AboutTab.classList.remove("d-none")
    TimeToVisitTab.classList.add("d-none");
    AttractionsTab.classList.add("d-none");

    BgColorChangeaboutButton.classList.add("selected-button");
    BgColorChangetimeToVisitButton.classList.remove("selected-button");
    BgColorChangeattractionsButton.classList.remove("selected-button");
}

function OnclicktimeToVisitButton() {
    AboutTab.classList.add("d-none")
    TimeToVisitTab.classList.remove("d-none");
    AttractionsTab.classList.add("d-none");

    BgColorChangeaboutButton.classList.remove("selected-button");
    BgColorChangetimeToVisitButton.classList.add("selected-button");
    BgColorChangeattractionsButton.classList.remove("selected-button");
}

function OnclickattractionButton() {
    AboutTab.classList.add("d-none")
    TimeToVisitTab.classList.add("d-none");
    AttractionsTab.classList.remove("d-none");

    BgColorChangeaboutButton.classList.remove("selected-button");
    BgColorChangetimeToVisitButton.classList.remove("selected-button");
    BgColorChangeattractionsButton.classList.add("selected-button");
}
