// function f1(x,y,callback){
//     console.log( "inside f1()");
//     console.log(x);
//     console.log(y);
//     console.log(callback);
// }
// f1(10,"chinnu",function f2(){
//     console.log("inside f2()");
// });


function f1(callback){
    callback("india" , 1000 , function f3(){
        console.log("inside f3()");
    });
}
f1(function f1(country,age){
    console.log(country);
    console.log(age);
});