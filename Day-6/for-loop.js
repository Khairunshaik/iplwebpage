// for(let i=1;i<=10;i++){
//     // console.log("Chinnu");
//     console.log(i);
// }



// for(let i=2; i<=20 ; i=i+2){
//     console.log(i);
// }


// first way to print table
// for(let i=5; i<=80 ; i=i+5){
//     console.log(i);
// }


//second way to print table
// let table=20; 
// for(let i=1;i<=10;i++){
//     console.log(table , "*" , i , "=" , table*i );
// }

// let arr = [11,23,45,22,34,55,67,78,59,100];
// if (arr[5] % 2 == 0){
//     console.log("even number");
// }
// else{
//     console.log("odd number");
// }


// let arr = [11,23,45,22,34,55,67,78,59,100];
// for(let i=0;i<arr.length;i++){
//     if (arr[i] % 2 == 0){
//         console.log("even number");
//     }
//     else{
//     console.log("odd number");
//     }
     
// }


// let arr = [11,23,45,22,34,55,67,78,59,100];
// for(let i=0;i<arr.length;i=i+3)
// {
//     console.log(arr[i]);
// }

// let arr = [11,23,45,22,34,55,67,78,59,100];
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
// }


// let arr = [11,23,45,22,34,55,67,78,59,100];
// let key = 59;
// let found=false;
// let index;
// for(i=0;i<arr.length;i++){
//     if(arr[i]==key){
//         found=true;
//         index=i;
//         break;
//     }
// }
// if(found == true){
//     console.log("Key found at " + index);
// }
// else{
//     console.log("key not found");
// }


let arr = [90,23,45,22,34,76,90,55,67,78,59,90,100];
let key = 90;

let count = 0;
for(i=0;i<arr.length;i++){
    if (arr[i] == key){
        count++;
    }
}
console.log("key found this number " + count + " times");