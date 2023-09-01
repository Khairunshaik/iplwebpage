let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    
    //1.make an object from XMLHttpRequest using a new keyword
    let xhr = new XMLHttpRequest();

    //2.you have opened a api with get method
    xhr.open("POST" , "https://jsonplaceholder.typicode.com/posts");

    xhr.responseType = "json";

    xhr.setRequestHeader("Content-Type" , "application/json");

    //3.you have added a event load listner, to console the response
    xhr.addEventListener("load" , function(){

        let p = document.createElement("p");

        p.innerText = JSON.stringify(xhr.response , null , 2);

        document.body.appendChild(p);

    });
    xhr.addEventListener("error" , function(){
        let p = document.createElement("p");

        p.innerText = "Failed to call and get data from api";

        document.body.appendChild(p);
    });

    //4.you have sent the request
    let body = {

        "userId": 11,
        "id": 101,
        "title": "This is my title",
        "body": "This is my body"
            
    };
    xhr.send(JSON.stringify(body));  //if we don't stringify it will print as [object,object] 
});

