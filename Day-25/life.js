// const f1 = function(){
//     console.log("hello f1()");
// }
// f1();


//! IIFE-immediately invoke function expression

//? define iife
//? pass arg in iife
//? return from iife


// let f1 = (function f1(country){
//     console.log("hello f1()----->" , country);
//     return "chinnu";
// })("india");
// console.log(f1);
// data protected

let x=(function f1(country){
    let name = "chinnu";    //secure

    function printName(){
        console.log(name);
    }
return printName;
}
)();
// console.log(x);
x();
