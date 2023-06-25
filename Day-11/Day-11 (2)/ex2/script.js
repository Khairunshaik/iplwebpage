// let header = document.getElementById("header");
// console.log(header);
// console.log(header.innerText);
// header.innerText="New logo";

// header.innerHTML= "<h1>New logo</h1>";
// header.textContent = "new logo is updated";
// console.log(header);



//styling
// header.style.color= "Orange";
// header.style.visibility = "hidden";
// header.style.fontSize= "50px";

function ChangecolorToRed(){
    let header = document.getElementById("header");
    header.style.color= "red";
}
function ChangecolorToBlue(){
    let header = document.getElementById("header");
    header.style.color= "blue";
}
function HidePara(){
    let paras = document.getElementsByClassName("para");
    paras[0].style.visibility= "hidden" ;
    paras[1].style.visibility= "hidden" ;
}
function ShowPara(){
    let paras = document.getElementsByClassName("para");
    paras[0].style.visibility= "visible" ;
    paras[1].style.visibility= "visible" ;
}
