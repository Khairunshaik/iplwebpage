// function CreationFunction(){   //function definition
//     console.log("Chinnu");
//     let value = 10 * 10;
//     console.log(value);
// }
// CreationFunction();   //function call


function printFullName(firstname , lastname , age){    //accepting parameters
    let fullname = firstname +" "+ lastname;      //code
    return(fullname);    //returning value to function

}
let f1 = printFullName("khairunnisa" ,"shaik" , 22);     //passing arguments
let f2 = printFullName("khamrunnisa" ,"shaik");
let f3 = printFullName("noorjahan" ,"shaik");

console.log(f1);
console.log(f2);
console.log(f3);