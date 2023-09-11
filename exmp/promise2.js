function f1(){
    let x = new Promise((resolve , reject)=>{
        setTimeout(()=>{
        resolve("Sorry your order has been cancelled ");
        });
    });
    return x;
}

// f1().then((value)=>{
//     console.log(value);
//     return "tamum";
// }).catch((value)=>{
//     console.log(value);
// });


//! f1() will return you a promise object.
async function PromiseConsume(){
    console.log("start");
    let x = await f1();   //we are using await to pause our function execution untill you get a resolve value
    console.log(x);
    

}
PromiseConsume();
console.log("end");
