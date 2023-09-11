const data = [
    {
        question: "Capital of India",
        a: "Bhopal",
        b: "Delhi",
        c: "Mumbai",
        d: "Hyderabad",
        correct: "b",
    },
    {
        question: "Capital of Telangana",
        a: "Bhopal",
        b: "Delhi",
        c: "Mumbai",
        d: "Hyderabad",
        correct: "d",
    },
    {
        question: "Capital of Us",
        a: "Washington D.C",
        b: "Texas",
        c: "Atlanta",
        d: "New york",
        correct: "a",
    },
    {
        question: "PM of India",
        a: "Narendra Modi",
        b: "Rahul Gandhi",
        c: "kaira",
        d: "Siddarth",
        correct: "a",
    },
    {
        question: "Calculate 2+2",
        a: "3",
        b: "6",
        c: "9",
        d: "4",
        correct: "d",
    },
    {
        question: "Did like this quiz app",
        a: "Yes",
        b: "No",
        c: "May be",
        d: "NOt sure",
        correct: "a",
    },


];

let question = document.getElementById('question');

let aOption = document.getElementById('a_option');
let bOption = document.getElementById('b_option');
let cOption = document.getElementById('c_option');
let dOption = document.getElementById('d_option');


let answers = document.getElementsByClassName("answer");

let quizNumber = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    //un check the radio buttons if they are check
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked) {
            answers[i].checked = false;
        }
    }


    question.innerText = data[quizNumber]["question"];
    aOption.innerText = data[quizNumber]["a"];
    bOption.innerText = data[quizNumber]["b"];
    cOption.innerText = data[quizNumber]["c"];
    dOption.innerText = data[quizNumber]["d"];
}

let button = document.getElementById("btn");
button.addEventListener("click", function () {
    //get user answers on console
    let userAnswer = null;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].checked == true) {
            userAnswer = answers[i].id;
        }

    }



    if (userAnswer) {
        //check if answer is correct or not
        if (userAnswer == data[quizNumber]["correct"]) {
            score++;
        }
        console.log("score===>", score);


        //load new question
        quizNumber++;  // 0 - 1 - 2 - 3 - 4 - 5
        if (quizNumber < data.length) {
            loadQuiz();
        }
        else {
            let header = document.getElementById("header");
            header.innerHTML = 
                `<h1> Your score ${score} out of ${data.length}</h1>`;

            button.innerText = "Double click to reload your Quiz";
            button.style.fontSize = "15px";
        }
    }
    // else{
    //     alert("select any one of the inputs");
    // }
})

button.addEventListener("dblclick", function(){
    location.reload();
})