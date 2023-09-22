const score=400
// console.log(score)
const balance =new Number(100)
//another way of defining Number where Number act as an object

// console.log(balance)

// console.log(balance.toString())      
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))


const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3))


const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'))



/**************************************** Maths ********************************/

// console.log(Math)
//Math is an object and have properties just like string and number

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))
// console.log(Math.min(11, 13, 21, 17, 50))
// console.log(Math.max(11, 13, 21, 17, 50))

console.log(Math.random())  
//gives random value between 0 and 1

console.log((Math.random() * 10) + 1)
//gives an decimal value starting with >=1
console.log(Math.floor(Math.random() * 10) + 1)
//gives only integer value starting with >=1, as we have used floor property


const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//gives only integer value starting with >=10(min), as we have used floor property

