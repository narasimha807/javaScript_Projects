let AboutTab = document.getElementById("aboutTab");
let TimeToVisitTab = document.getElementById("timeToVisitTab");
let AttractionsTab = document.getElementById("attractionsTab");
TimeToVisitTab.classList.add("d-none");
AttractionsTab.classList.add("d-none");
function OnclickaboutButton(){
    AboutTab.classList.remove("d-none")
    TimeToVisitTab.classList.add("d-none");
    AttractionsTab.classList.add("d-none");

    AboutTab.classList.add("selected-button");
    TimeToVisitTab.classList.add("selected-button");
    AttractionsTab.classList.remove("selected-button");
}

function OnclicktimeToVisitButton(){
    AboutTab.classList.add("d-none")
    TimeToVisitTab.classList.remove("d-none");
    AttractionsTab.classList.add("d-none");

    AboutTab.classList.remove("selected-button");
    TimeToVisitTab.classList.add("selected-button");
    AttractionsTab.classList.remove("selected-button");
}

function OnclickattractionButton(){
    AboutTab.classList.add("d-none")
    TimeToVisitTab.classList.add("d-none");
    AttractionsTab.classList.remove("d-none");

    AboutTab.classList.remove("selected-button");
    TimeToVisitTab.classList.remove("selected-button");
    AttractionsTab.classList.add("selected-button");
}






