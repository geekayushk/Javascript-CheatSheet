// var c=300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("Inner :", a)
}
// console.log(a)
// console.log(b)
// console.log(c)


function one() {
    const username = "ayush"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)   //error

    // two()
}

// one()     //no output


if (true) {
    const username = "ayush"
    if (username === "ayush") {
        const website = "youtube"
        // console.log(username + website)
    }
    // console.log(website)      //error
}

// console.log(username)         //error



/******************************** interesting****************************/
console.log(addone(5))
function addone(num) {
    return num + 1
}
//here the function is called before its defintion and it gives the correct output, because of how it is defined


// addTwo(5)      
//when function is defined like this and is called before its definition then it throws an error
const addTwo = function (num) {
    return num + 2
}


/* this topic is called hoisting*/