let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click" , function(){
    /**
     * 
     * grab the input tag text 
     * create a li tag
     * append to ul tag
     * 
     */
    let item = document.getElementById("item");
    
    if (item.value) {
        let l1 =document.getElementsByTagName("li");
        console.log(l1);

        for(let i=0;i < l1.length;i++){
            if(item.value == l1[i].innerText){
                alert("This item is already added....");
                return;
            }
        }
        let li = document.createElement("li");
        li.classList.add("l");    //you can assign a class list in javascript
        li.innerText = item.value;

        let list = document.getElementById("list");
        list.appendChild(li);
    }
    else {
        alert("provide input");
    }
});

//////////////////////////////////////////

let clear = document.getElementById("clear");
    clear.addEventListener("click" , function(){
    let item = document.getElementById("item");
    item.value = "";
})

//////////////////////////////////////////

let deleteAll = document.getElementById("deleteAll");
    deleteAll.addEventListener("click" , function(){
    let list = document.getElementById("list");
    list.innerHTML=" ";  
})

//////////////////////////////////////////

let deleteFirst = document.getElementById("deleteFirst");
    deleteFirst.addEventListener("click" , function(){
    let list = document.getElementById("list");
    let firstchild = list.firstElementChild;
    list.removeChild(firstchild);
})

//////////////////////////////////////////

let deleteLast = document.getElementById("deleteLast");
    deleteLast.addEventListener("click" , function(){
    let list = document.getElementById("list");
    let lastchild = list.lastElementChild;
    list.removeChild(lastchild);
})

// function removeFirstChild(){
//     let list = document.getElementById("list");
//     let firstchild = list.firstElementChild;
//     list.removeChild(firstchild);
// }
// function removeLastChild(){
//     let list = document.getElementById("list");
//     let lastchild = list.lastElementChild;
//     list.removeChild(lastchild);