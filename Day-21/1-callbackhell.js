//eg-1

// function setName(callback){
//     let name = "Khairunnisa";
//     callback(name);
// }

// function greet(name , callback){   //callback
//     console.log("Happy Diwali =" , name);
//     callback(name);
// }

// function aksForGifts(name , callback){
//     console.log(`Where is my gift for ${name}`);
//     callback(name);
// }

// function returnGifts(name){
//     console.log(`Here is you gift ${name} ---> https://gifts.com9876`);
// }

// setName(function(name){
//     greet(name , function(name){
//         aksForGifts(name , function(name){
//             returnGifts(name);
//         });
//     });
// });

// eg-2

function placeOrder(food , callback){
    console.log("Your order is placed===> " , food);
    callback(food);
}
function Completepayment(food , callback){
    console.log(`Your payment is completed for ${food}`);
    callback(food);
}
function preparingFood(food , callback){
    console.log(`Your ${food} is being prepared.......`);
    callback(food);
}
function outForDelivery(food , callback){
    console.log(`Your ${food} is out for delivery.......`);
    callback(food);
}
function ReceiveDelivery(food , callback){
    console.log(`Your ${food} is delivered.......`);
    callback(food);
}
function EnjoyedFood(food){
    console.log(`We hope you have enjoyed your ${food} `);
}
placeOrder("Burger" , function(food){
    Completepayment(food , function (){
        preparingFood(food , function(){
            outForDelivery(food , function(){
                ReceiveDelivery(food , function(){
                    EnjoyedFood(food);
                });
            });
        });
    });

});
