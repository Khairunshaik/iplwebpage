// function PrintingNumbers(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// PrintingNumbers(2,3,4,5,6,7,8  );




// function printObject(obj1){
//     console.log("printing object===>" , obj1);
// }

// let x = {
//     Name: "chahat",
//     Address: "rajahmundry"
// };
// printObject(x);         //passing objects as an argument



//passing array

// function printArray(arr){
//         console.log("printing array===>" , arr);
// }
    
// let x = {
//         Name: "chahat",
//         Address: "rajahmundry"
//     };
// printArray(x);  



//passing function as argument

function f1(num , x , name){
        console.log("inside f1 function");
        console.log(num, name);
        // console.log(x);
        x("andhra pradesh");
}
f1(     100, 
        function f2(state){
        console.log("inside f2 function");
        console.log(state)},
        "chinnu"
);