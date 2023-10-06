const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to this website`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)


// function chai() {
//     let username = "ayush"
//     console.log(this.username)
// }

// chai()  //undefined


// const chai = function () {
//     let username = "ayush"
//     console.log(this.username)
// }


//syntaxes for arrow function

const chai = () => {
    let username = "ayush"
    console.log(this.username)
}

// chai()


//Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


//Impilcit return
// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "ayush" })
//syntax for returning an object using arrow function(implicit return)

console.log(addTwo(3, 4))

