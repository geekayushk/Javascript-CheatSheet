"use strict"; //treat all JS code as newer version
//good practice but without even using it, will work

//alert(3+3)  //we are using nodejs, not browser

let name= "ayush"
let age= 14
let gender= "male"

/*DATATYPES*/

//  number => 2 to power 53
//  bigint
//  string => ""
//  boolean => true/false
//  null => standalone value 
//  undefined => 
//  symbol => unique
//  object



// console.log(typeof "yush");
// console.log(typeof age);
// console.log(typeof null);       //object
// console.log(typeof undefined);  //undefined



/************************************** Summary ***************************************/

//JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime 
//and can change throughout the program as we assign different values to them.


//Primitive datatypes

// 7 types: String, symbol, boolean, bigInt, number, null, undefined


// Non-Primitive datatypes (Reference)

// Array, objects, functions



//how to use symbol

// const id= Symbol('123')
// const anotherId= Symbol('123')

// console.log(id===anotherId)


//non-primitive
//array
const heros=["xyz", "abc", "uio"]

//objects
let myObj={
    name:"ayush",
    age: 22
}

const myFunction= function(){
    // console.log("hello world")
}





/******************************** Memories *************************************/

//Stack(Primitive), Heap(non-primitive)

//primitive(gives copy of the varaiable)

let myName="ayush"

let nickName=myName
nickName="shanu"

console.log(myName)      //op: ayush
console.log(nickName)   //op: shanu


//non-primitive(gives reference of the variable)

let userOne={
    email:"ayu@mail.com",
    age:21
}

let userTwo=userOne

userTwo.email="shanu@mail.com"

console.log(userOne.email)    //op:shanu@mail.com
console.log(userTwo.email)   //op:shanu@mail.com