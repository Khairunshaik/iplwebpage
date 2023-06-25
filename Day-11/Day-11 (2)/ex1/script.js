///creating element tags here

//h1 tag created
const h1 = document.createElement("h1");
h1.innerText = "Fathima";
let box = document.getElementById("box");
box.appendChild(h1);

//p tag created
const p = document.createElement("p");
p.innerText = "tamum is very bad girl she doesnt listen to her mother like her sister she has very very big kommulu";
box.appendChild(p);


///////////////////////////
// let pp = document.querySelector("#p1");    //for getbyid-#
// let pp = document.querySelector(".p1");  for class-.
let pp = document.querySelectorAll("#p1");
console.log(pp);
pp.style.color = "pink";