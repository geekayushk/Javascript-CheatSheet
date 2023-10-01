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
    console.log("please enter a username")
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

console.log(loginUserMessage())


