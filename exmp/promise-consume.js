function f1(){
    let x = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("chinnu");  //resolve value--"chinnu"
        },2000);   //resolving value after two seconds
    });
    return x;  //promise object
}
let p1 = f1();
// console.log(p1);
//?if the promise is in pending state , we can use then method to get resolve value.

//? to get resolved value from promise object, we will be using then()
//? inside then method, we will passing a callback and which have parameter (value)
//! In case of SetTimeout()   --->   this then method waits until the promise is resolved
//? once it resolved after wards callback inside then method was executed.


p1.then(function (value) {
    console.log(value);
});