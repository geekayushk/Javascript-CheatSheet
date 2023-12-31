//singleton: when objects are created by using constructor
// Object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Ayush",
  [mySym]: "mykey1", //syntax to define symbol inside an object
  age: 22,
  location: "bangalore",
  email: "ayush@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);    // another method to access the value of the key
// console.log(JsUser[mySym]);     //to access the value of symbol
// console.log(typeof mySym);

JsUser.email = "ayushless@yahoo.com";
// Object.freeze(JsUser); //to freeze or lock the values. so that it cant be modified.
JsUser.email = "shanu@mail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
