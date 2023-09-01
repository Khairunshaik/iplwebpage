// await keyword can only be used within an async function only.
// we can use await keyword to pause the execution of the fucntion until a promise is resolved or rejected
// it allows you to assign the resolved value of a promise to a variable or perform further operations



function p1(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("chinnu");
        },2000);
    });
}
async function f1(){
    console.log("start");
    let a = await p1();  //return a resolve value
    console.log(a);
    console.log("end");
}
f1();