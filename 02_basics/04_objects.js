// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "ayush";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "ayush",
      lastname: "kumar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4={obj1,obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3);

const obj4 = { ...obj1, ...obj2 }; //we will use spread operator most of the time.
// console.log(obj4);

//Whenever the values come from database then it comes in this format
const users = [
  {
    id: 1,
    email: "a@mail.com",
  },
  {
    id: 2,
    email: "y@mail.com",
  },
  {
    id: 3,
    email: "u@mail.com",
  },
  {
    id: 4,
    email: "s@mail.com",
  },
];
// console.log(users[0].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
//only keys of tinderUser are returned as an array
console.log(Object.values(tinderUser));
//only values of tinderUser are returned as an array
console.log(Object.entries(tinderUser));
//less used but returned in key-value pair as an array
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
