// class Person{
//     constructor(){
//         this.name ='john';
//         this.age = '30';
//     }
//     getName(){
//         return this.name;
//     }
// }
// class Athelete extends Person{
//     constructor(){
//         super();
//         this.occupation = 'shooter';
//     }
//     getDetails(){
//         console.log(this.getName()+ 'works as a' + this.occupation);
//     }
// }
// const mObj = new Athelete();
// mObj.getDetails();
// console.log(mObj.getName());


// console.log(parseInt("123xyz"));



// const mObj = {
//     firstName: 'John',
//     lastName: 'Lark',
//     age: 28,
//     getDetails: function(){
//         console.log(`${firstName} ${lastName} is ${age} years old`);
//     } 
// }
// mObj.firstName = 'Toto'
// mObj.lastName = 'wolff';
// mObj.age = 35;
// mObj.getDetails();


// function PrintDetails(n){
//     return function(a){
//         return function (o){
//             console.log(`$(n) is ${a} years old and works as a ${0}`);
//         }
//     }
// }
// PrintDetails('Toto')(38)('Team Principal');



// function mFun(arg){
//     var result = {};
//     for (var i=0;i<Object.keys(arg).length;i++)
//     {
//         result[Object.keys(arg)[i]] = arg[Object.keys(arg)[i]]
//     }
//     return result;
// }


// const mObj = {
//     "name": "Baba Yaga",
//     "getName": function(){
//         console.log(this.name)
//     }
// }
// console.log(JSON.stringify(mObj));

// var count =[1 , , 3];




// var mNum = 10;
// const mProm1 = new Promise((resolve, reject)=>{
//     if(mNum >= 10){
//         resolve(mNum);
//     }
//     else{
//         reject(new Error("Number not big enough"));
//     }
// })
// const mProm2 = new Promise((resolve, reject)=>{
//     data = data + 20;
//     if(data >=30){
//         resolve(data);
//     }
//     else{
//         reject(new Error("Data not big enough"));
//     }
// })
// mProm1
//     .then(mProm2)
//     .then((res)=>{
//         console.log(res);
//     })
//     .then(mProm2)
//     .then(response => console.log(response))
//     .catch((err) =>{
//         console.log(err);
//     })



// const mArr = [1,2,3,4,5];
// const mStr = "Amigo";
// const mNum1 = 10;
// const mNum2 = 20;
// const mNum3 = 30;
// const result = mNum1 + mNum2 + mStr + mArr + mNum3;
// console.log(result);


// var welcome = "Hello";
// console.log( welcome.split("") );

// console.log(parseInt(false));
// console.log(Number(false));


// const mArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// mArr.slice(0, 5);
// mArr.splice(2, 3);;
// console.log(mArr);



// var num1 = 100;
// var result = num1 > 50 ? (num1+10) < 100 ? (num1 + 20): (num1 + 50) < 200 ? (num1 + 500) : (num1 + 200) : num1;
// console.log(result);


// console.log(undefined==null);
// console.log(undefined===null);

// function infixToPrefix(infixExpression) {
//     // Step 1: Reverse the infix expression
//     const reversedInfix = infixExpression.split('').reverse().join('');
  
//     // Step 2: Convert the reversed infix expression to postfix
//     const postfixExpression = infixToPostfix(reversedInfix);
  
//     // Step 3: Reverse the postfix expression to get the prefix expression
//     const prefixExpression = postfixExpression.split('').reverse().join('');
  
//     return prefixExpression;
//   }
  
//   function infixToPostfix(infixExpression) {
//     const precedence = {
//       '+': 1,
//       '-': 1,
//       '*': 2,
//       '/': 2,
//       '^': 3,
//     };
    
//     const stack = [];
//     let postfix = '';
    
//     for (let i = 0; i < infixExpression.length; i++) {
//       const char = infixExpression[i];
      
//       if (isOperand(char)) {
//         postfix += char;
//       } else if (char === '(') {
//         stack.push(char);
//       } else if (char === ')') {
//         while (stack.length > 0 && stack[stack.length - 1] !== '(') {
//           postfix += stack.pop();
//         }
//         stack.pop(); // Remove the '('
//       } else {
//         while (
//           stack.length > 0 &&
//           precedence[char] <= precedence[stack[stack.length - 1]]
//         ) {
//           postfix += stack.pop();
//         }
//         stack.push(char);
//       }
//     }
    
//     while (stack.length > 0) {
//       postfix += stack.pop();
//     }
    
//     return postfix;
//   }
  
//   function isOperand(char) {
//     return /^[a-zA-Z0-9]+$/.test(char);
//   }
  
//   // Example usage:
//   const infixExpression = "A+B*C-D/E";
//   const prefixResult = infixToPrefix(infixExpression);
//   console.log("Infix Expression:", infixExpression);
//   console.log("Prefix Expression:", prefixResult);



// const students = 3 
// const subjects = 5
// const arr = [
//     [75, 76, 65, 87, 87],
//     [78, 76, 68, 56, 89],
//     [67, 87, 78, 77, 65]
// ]

// let map = arr.reduce((acc, list) => {
//     list.forEach((mark, i) => {
//         if(!acc[i]) {
//             acc[i] = mark
//         } else {
//             acc[i] = acc[i] + mark
//         }
//     });

//    return acc;
// }, {});

// let indexToIgnore = 0;
// let lowest = map[0] / students

// for (const i in map) {
//     if(i !== '0') {
//         if (Object.hasOwnProperty.call(map, i)) {
//             const total = map[i];
//             const average = total / students
//             if((average) < lowest) {
//                 indexToIgnore = Number(i)
//             }
//         }
//     }
// }


// const result = arr.reduce((acc, list) => {
//     const sum = list.reduce((_acc, no, i) => i !== indexToIgnore ? _acc + no: _acc ,0)
//     acc.push(sum);
//     return acc;
// }, [])

// console.log(result) // => [ 325, 299, 296 ]

function calculateTrainingUnits(n) {
    if (n <= 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else if (n === 2) {
      return 2;
    } else if (n === 3) {
      return 3;
    } else {
      return (
        calculateTrainingUnits(n - 1) +
        calculateTrainingUnits(n - 2) +
        calculateTrainingUnits(n - 3)
      );
    }
  }
  
  // Example usage
  const nthDay = 6; // Change this to get the units for a different day
  const units = calculateTrainingUnits(nthDay);
  console.log(units);