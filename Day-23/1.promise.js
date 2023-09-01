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

let x = placeOrder("burger");

x.then(function(value){
    return(value);
}).then(function(value){
    let a = completePayment(value);
    return(a);
}).then(function(value){
    let b = deliveryFood(value);
    return(b);
}).then(function(value){
    enjoyFood(value);
});