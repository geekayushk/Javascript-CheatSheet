const coding = ["js", "ruby", "java", "python", "cpp"]


//callback function doesnt have any name
// coding.forEach(function (val) {
//     console.log(val)
// })

// coding.forEach((val) => {
//     console.log(val)
// })


// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })


const myCoding = [
    {
        langName: "js",
        langFile: "javascript"
    },
    {
        langName: "python",
        langFile: "py"
    },
    {
        langName: "c++",
        langFile: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.langName)
})