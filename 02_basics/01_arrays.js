//can contains a mix of different datatypes in js
const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];

//read Shallow copy and deep copy

// console.log(myArr[2]);

const myArr2 = new Array(1, 2, 3, 4);

// Array Methods
// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);
//join operation converts array into string with the value remain same and without the square brackets

/*           slice, splice            */

console.log("A ", myArr);

//slice
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);

//splice
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
