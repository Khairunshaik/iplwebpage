// let age = 22;
// let myname = "chinnu";

// if(true){
//     let country = "India";
//     console.log(age);
//     console.log(country);
// }
// console.log(age);    //global var 
// console.log(myname);
// console.log(country);    //loacl var here cant be printed because it is outside the function

let a = "chinnu";
 function f1(){
    let a = 10;
    console.log(a);  //local scope
 }
 f1();
 console.log(a);  //global scope