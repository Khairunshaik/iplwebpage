function placeOrder(food){
    return new Promise(function(resolve,reject){
        console.log(`Your ${food} is placed`);
        resolve(food);
        
    });
}
function completePayment(food){
    return new Promise(function(resolve,reject){
        console.log(`Payment is done for ${food}`);
        resolve(food);
    });
}
function deliveryFood(food){
    return new Promise(function(resolve,reject){
        console.log(`Your ${food} is delivered`);
        resolve(food);
    });
}
function enjoyFood(food){
    console.log(`Enjoy your ${food}`);
}

async function f1(food){
    let a = await placeOrder(food);
    let b = await completePayment(a);
    let c = await deliveryFood(b);
    enjoyFood(c);
    return "Chinnu";
}
let x = f1("pizza");
// console.log("Line 30====>" , x);
x.then(function(value){
    console.log(value);
});