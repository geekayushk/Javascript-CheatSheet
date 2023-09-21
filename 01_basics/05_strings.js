const name="ayush"
const repoCount=50

// console.log(name+repoCount+ "value")  // not a good practice

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)   //called as string interpolation
//good way of writing like this

const gameName=new String('ayush-legit')
//another way of defining string where string act as an object
//and we can access each single character
console.log(gameName[0])

//by using the above method for defining the string we can use various string properties
console.log(gameName.__proto__);


console.log(gameName.length)
console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('s'))


const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne="   ayush    "
console.log(newStringOne)
console.log(newStringOne.trim())


const url="https://ayush.com/ayush%20kumar"
console.log(url.replace('%20','-')); 
console.log(url.includes('ayush'))