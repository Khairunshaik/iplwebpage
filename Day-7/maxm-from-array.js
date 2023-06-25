let arr=[30, 45, 65, 67, 98, 464, 97];

/***
 * run a loop ...
 * and make the first element as maximum value.(x)
 * and then compare the next values till the end of the array
 * if you found the bigger value update the (x) with the bigger value
 * if you found lesser then do nothing
 */

let x = arr[0];
for (let i=0; i<arr.length; i++){
    if(x < arr[i]){   //for lesser value " > "
        x = arr[i];
    }
}
console.log(x);