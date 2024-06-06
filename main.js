var section = document.querySelector("div");
var bigCaseButton = document.querySelector(".bigButton");
var smallCaseButton = document.querySelector(".smallButton");

function cabitalElement(){
    section.classList.add("large");
}

function csmallElement(){
    section.classList.remove("large");
}

bigCaseButton.onclick = cabitalElement;
smallCaseButton.onclick = csmallElement;