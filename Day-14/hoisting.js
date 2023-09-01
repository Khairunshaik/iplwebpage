//variable hoisting
// console.log(myVariable);  //undefined
// let myVariable = "hello , hi"; //assignment
// console.log(myVariable);  //hello hi




//function hoisting
// myFunction();
// function myFunction(){
//     console.log("hello , hi....!");  //hello , hi...
// }




// let a = "chinnu";
// function f1(){
//     console.log(a);
//     let b = "tamum";
//     console.log(b);
// }
// console.log(a);
// f1();
//chinnu chinnu tamum




// function outerFunction(){
//     console.log("outerFucntion...");
// }

// function innerFunction(){
//     console.log("innerFucntion...");
// }
// outerFunction();  //outerFunction




// function outerFunction(){
//     console.log("outerFucntion...");
//     function innerFunction(){
//         console.log("innerFucntion...");
//     }
//     innerFunction();
    
// }
// // innerFunction();
// outerFunction();  //outerFunction,innerFunction




//nested loops
// function outerFunction(){
//     console.log("outerFucntion...");

//     function innerFunction(){
//         console.log("innerFucntion...");
//         var a = "chinnu";
//         console.log(a);
//     }
//     innerFunction();
    
// }
// outerFunction();  ///outerfunction,innerfunction,chinnu




// function f1(){
//     return 100;
// }
// let x = f1();
// console.log(x);   //100




// function outerFucntion(){
//     function innerFunction(){
//         let a=10;
//         console.log(a);
//     }
//     return innerFunction;
// }
// let x = outerFucntion();
// x();



//closures
//a closure is created whenever an inner function refernces varaibles from outer function
function outerFucntion(){
    let a= 10;
    let name="chinnu";
    function innerFucntion(){
        console.log(a);
        console.log(name);
        
    }
    return innerFucntion;
}
let x= outerFucntion();
x();