function sayMyName() {
  console.log("A");
  console.log("y");
  console.log("u");
  console.log("s");
  console.log("h");
}
// sayMyName();


// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;
}
const result = addTwoNumbers(3, 4);
// console.log("Result:", result);



function loginUserMessage(username) {
  if (!username) {
    // console.log("please enter a username")
    return
  }
  return `${username} just logged in`
}
// function loginUserMessage(username = "sam") {
//   if (!username) {
//     console.log("please enter a username")
//     return
//   }
//   return `${username} just logged in`
// }

// console.log(loginUserMessage())


function calculateCartPrice(...num1) {
  return num1
}
// function calculateCartPrice(val1, val2, ...num1) {
//   return num1
// }
//  ... this is also called as rest operator.
//Based on thier usage it is called as a rest and spread operator
//Rest opeator puts the value into an array. 
//we use rest operator when we dont know how many arguments will be passed into the function so that we can perform operation on this values when it in array

// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
  username: "ayush",
  price: 200
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))