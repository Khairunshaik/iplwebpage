let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let input = document.getElementById("movie");

    //1.make an object from XMLHttpRequest using a new keyword
    let xhr = new XMLHttpRequest();

    let url = `https://www.omdbapi.com/?s=${input.value}&apiKey=53b4ed65`

    //2.you have opened a api with get method
    xhr.open("GET" , url);

    xhr.responseType = "json";

    //3.you have added a event load listner, to console the response
    xhr.addEventListener("readystatechange" , function(){
        if(xhr.readyState == XMLHttpRequest.DONE){
            console.log(typeof xhr.response);

            console.log(xhr.response.Search);

            for(i=0 ; i < xhr.response.Search.length ; i++){
                let img = document.createElement("img");

                img.classList.add("movie-card");

                img.src = xhr.response.Search[i].Poster;

                document.body.appendChild(img);
            }
        }

    });
    xhr.addEventListener("error" , function(){
        let p = document.createElement("p");

        p.innerText = "Failed to call and get data from api";

        document.body.appendChild(p);
    });

    //4.you have sent the request
    xhr.send();
});

