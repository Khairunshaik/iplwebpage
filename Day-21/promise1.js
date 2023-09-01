//eg-1  creation of promise
// console.log("start");
// let a = Promise.resolve("Chinnu here.... ");
// // let b = Promise.reject("Chinnu here.... ");        //to reject a function
// console.log(a);
// console.log("end");



//eg-2
// console.log("start");
// function f1(){
//     return new Promise(function(resolve , reject){
//         setTimeout(function(){
//             console.log("Inside set time out function");  //// after few seconds it will be printed
//             resolve("chinnu");
//         } , 2000);
//     })
// }
// let x = f1();
// console.log(x);
// console.log("end");



//consumption of promise:
//.then is used to get fulfilled objects from the promise objects
//callback inside .then will be executed only when your promise is resolved or fulfilled
// console.log("start");
// function f1(){
//    return new Promise(function(resolve , reject){
//             resolve({name : "chinnu" , country : "India"});
//         })
//     }
// let x = f1();
// x.then(function(value){
//     console.log(value);
// });
// console.log("end");




//.then changing
console.log("start");
function f1(){
   return new Promise(function(resolve , reject){
        resolve("chinnu");
    })
}
let x = f1();
x.then(function(value){
    console.log(value);
    return "noori";
})
.then(function(value){
    console.log("value ===> " , value);
    return "tamum";
})
.then(function(value){
    console.log("value ===> " , value);
    return "fathima";
})
console.log("end");