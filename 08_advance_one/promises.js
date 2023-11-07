//creating promise (syntax)
const promiseOne = new Promise(function (resolve, reject) {    //syntax
    //Do an aync task
    //DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

// This "then" callback function will be executed when the Promise is resolved.
promiseOne.then(function () {
    console.log('Promise consumed')
})



//another syntax
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

//another
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "geekayushk", email: "yush@mail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})


//another
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "ayush", password: "123" })
        }
        else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

//"then" is linked with reslove and "catch" is linked with reject and "finally" is default

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function (error) {
    console.log(error)
}).finally(() => console.log("The promsie is either is resolved or rejected"))
//The above method is called is chaining as the return value is returned to its next function


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        }
        else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

//Its not necessary to handle promise with "then" and "catch".
//We can also use "async-await" to handle promise
//In "async and await" we dont handle error part directly(i.e. like catch)

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


//another

// async function getAllUsers() {
//     try {

//         //since its a network request so it will take time, so thats why we used await
//         const response = await fetch('https://api.github.com/users/geekayushk')

//         //similarly, converting the fetched data to json, it will take time, so used await
//         const data = await response.json()
//         console.log(data)
//         console.log(data.followers)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()


//now how to fetch the above same function using "then and catch"

fetch('https://api.github.com/users/geekayushk')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })