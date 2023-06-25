function RemoveAll(){
    let list = document.getElementById("list");
    // list.style.visibility="hidden";
    // console.log(list.innerHTML);
    list.innerHTML= " ";
}
function removeFirstChild(){
    let list = document.getElementById("list");
    let firstchild = list.firstElementChild;
    list.removeChild(firstchild);
}
function removeLastChild(){
    let list = document.getElementById("list");
    let lastchild = list.lastElementChild;
    list.removeChild(lastchild);
}
function removeHeader(){
    let header = document.getElementById("logo");
    header.innerHTML= " ";
}
function AddtodoList(){
    let input = document.getElementById("todo");
    console.log(input.value);


    if(input.value && input.value.length > 2){
        let li = document.createElement("li");
        li.innerText = input.value;
        input.value="";

        let list = document.getElementById("list");
        list.appendChild(li);
    }
    else{
        alert("empty things can't be added");
    }
}